/*eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'

import Admin from '../components/AdminLogin/Admin.vue'
import ApproveInstitue from '../components/AdminLogin/ApproveInstitute'
import ManageColleges from '../components/AdminLogin/ManageColleges'
import ViewStudents from '../components/AdminLogin/ViewStudents'

import College from '../components/CollegeLogin/College'
import FacultyManagement from '../components/CollegeLogin/FacultyManagement'

import Student from '../components/StudentLogin/Student'
import SendRequest from '../components/StudentLogin/SendRequest'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/approveinstitute',
      name: 'ApproveInstitue',
      component: ApproveInstitue,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/managecolleges',
      name: 'ManageColleges',
      component: ManageColleges,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/viewstudents',
      name: 'ViewStudents',
      component: ViewStudents,
      meta: { requiresAuth: true }
    },
    {
      path: '/college',
      name: 'College',
      component: College,
      meta: { requiresAuth: true }
    },
    {
      path: '/college/facultymanagement',
      name: 'FacultyManagement',
      component: FacultyManagement
    },
    {
      path: '/student',
      name: 'Student',
      component: Student,
      meta: { requiresAuth: true }
    },
    {
      path: '/student/sendrequest',
      name: 'SendRequest',
      component: SendRequest
    },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
});
router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth) {
    if(localStorage.getItem('status')=='verified') {
      next();
    }
    else {
      router.push({name:'HomePage'})
    }
  }
  else {
    next();
}

})

export default router;

/*eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'

import Admin from '../components/AdminLogin/Admin.vue'
import ApproveInstitue from '../components/AdminLogin/ApproveInstitute.vue'
import ManageColleges from '../components/AdminLogin/ManageColleges.vue'
import ViewStudents from '../components/AdminLogin/ViewStudents.vue'

import College from '../components/CollegeLogin/College'
import FacultyManagement from '../components/CollegeLogin/FacultyManagement'

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
      component: ApproveInstitue
    },
    {
      path: '/admin/managecolleges',
      name: 'ManageColleges',
      component: ManageColleges
    },
    {
      path: '/admin/viewstudents',
      name: 'ViewStudents',
      component: ViewStudents
    },
    {
      path: '/college',
      name: 'College',
      component: College,
    },
    {
      path: '/college/facultymanagement',
      name: 'FacultyManagement',
      component: FacultyManagement
    }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active',
});
router.beforeEach((to,from,next)=>{
      if(to.meta.requiresAuth){
              if(localStorage.getItem('status')=='verified')
              {
                     next();
              }
              else{
                      router.push({name:'HomePage'})
              }
      }
      else{
              next();
      }

})

export default router;

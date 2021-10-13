/*eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'
import Courses from '../components/Courses'
import About from '../components/About'
import Events from '../components/Events'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

import Admin from '../components/AdminLogin/Admin.vue'
import ApproveInstitue from '../components/AdminLogin/ApproveInstitute'
import ManageColleges from '../components/AdminLogin/ManageColleges'
import ViewStudents from '../components/AdminLogin/ViewStudents'

import College from '../components/CollegeLogin/College'
import FacultyManagement from '../components/CollegeLogin/FacultyManagement'
import SendResponse from '../components/CollegeLogin/SendResponse'

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
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        role : "Admin"
      },

    },
    {
      path: '/admin/approveinstitute',
      name: 'ApproveInstitue',
      component: ApproveInstitue,
      meta: {
        requiresAuth: true,
        role : "Admin"
      },

    },
    {
      path: '/admin/managecolleges',
      name: 'ManageColleges',
      component: ManageColleges,
      meta: {
        requiresAuth: true,
        role : "Admin"
       },
    },
    {
      path: '/admin/viewstudents',
      name: 'ViewStudents',
      component: ViewStudents,
      meta: {
        requiresAuth: true,
        role : "Admin"
      },
    },
    {
      path: '/college',
      name: 'College',
      component: College,
      meta: {
        requiresAuth: true,
        role : "College"
      }

    },
    {
      path: '/college/facultymanagement',
      name: 'FacultyManagement',
      component: FacultyManagement,
      meta: {
        requiresAuth: true,
        role : "College"
      }
    },
    {
      path: '/college/sendresponse',
      name: 'SendResponse',
      component: SendResponse,
      meta: {
        requiresAuth: true,
        role : "College"
      }
    },
    {
      path: '/student',
      name: 'Student',
      component: Student,
      meta: {
        requiresAuth: true,
        role : "Student"
      }
    },
    {
      path: '/student/sendrequest',
      name: 'SendRequest',
      component: SendRequest,
      meta: {
        requiresAuth: true,
        role : "Student"
      }
    },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass : 'active'
});
router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth && to.meta.role == "Admin"){
    console.log(localStorage.getItem('role'))
    if((localStorage.getItem('role') == 'Admin') && (localStorage.getItem('status')=='verified')){
      next();
    }
    else{
      router.push({ name : 'HomePage'});
    }
  }
  else if(to.meta.requiresAuth && to.meta.role == "College"){
    if((localStorage.getItem('role') == 'College') && (localStorage.getItem('status')=='verified')){
      next();
    }
    else{
      router.push({ name : 'HomePage'})
    }
  }
  else if(to.meta.requiresAuth && to.meta.role == "Student"){
    if((localStorage.getItem('role') == 'Student') && (localStorage.getItem('status')=='verified')){
      next();
    }
    else{
      router.push({ name : 'HomePage'})
    }
  }
  else{
    next();
  }
})
export default router;

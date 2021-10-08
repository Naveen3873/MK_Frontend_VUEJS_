/*eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

import Admin from '../components/AdminLogin/Admin.vue'
import ApproveInstitue from '../components/AdminLogin/ApproveInstitute'
import ManageColleges from '../components/AdminLogin/ManageColleges'
import ViewStudents from '../components/AdminLogin/ViewStudents'

import College from '../components/CollegeLogin/College'
import FacultyManagement from '../components/CollegeLogin/FacultyManagement'
// import UpdateCollege from '../components/CollegeLogin/UpdateCollege'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
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
      component: College
    },
    {
      path: '/college/facultymanagement',
      name: 'FacultyManagement',
      component: FacultyManagement
    },
    // {
    //   path: '/college/updatecollege',
    //   name: 'UpdateCollege',
    //   component: UpdateCollege
    // },
  ],
  mode: 'history'
})

// Meta Handling

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem('jwt') == null) {
//       next({
//         path: '/',
//         params: { nextUrl: to.fullPath }
//       })
//     } else {
//       let user = JSON.parse(localStorage.getItem('user'))
//       if (to.matched.some(record => record.meta.is_admin)) {
//         if (user.is_admin == 1) {
//           next()
//         } else {
//           next({ name: 'userboard' })
//         }
//       } else {
//         next()
//       }
//     }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     if (localStorage.getItem('jwt') == null) {
//       next()
//     } else {
//       next({ name: 'userboard' })
//     }
//   } else {
//     next()
//   }
// })

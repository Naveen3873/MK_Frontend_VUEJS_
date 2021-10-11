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
// import UpdateCollege from '../components/CollegeLogin/UpdateCollege'

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
<<<<<<< HEAD
      meta: { requiresAuth: true }
=======
>>>>>>> d751150c819c972f2fd3d961ce5b8c9c3d5eede1
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
<<<<<<< HEAD
      component: ViewStudents,
      meta: { requiresAuth: true }
=======
      component: ViewStudents
>>>>>>> d751150c819c972f2fd3d961ce5b8c9c3d5eede1
    },
    {
      path: '/college',
      name: 'College',
<<<<<<< HEAD
      component: College,
      meta: { requiresAuth: true }
=======
      component: College
>>>>>>> d751150c819c972f2fd3d961ce5b8c9c3d5eede1
    },
    {
      path: '/college/facultymanagement',
      name: 'FacultyManagement',
<<<<<<< HEAD
      component: FacultyManagement,
      meta: { requiresAuth: true }
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
      component: SendRequest,
      meta: { requiresAuth: true }
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
=======
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
>>>>>>> d751150c819c972f2fd3d961ce5b8c9c3d5eede1

/*eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

import Admin from '../components/AdminLogin/Admin.vue'
import ApproveInstitue from '../components/AdminLogin/ApproveInstitute.vue'
import ManageColleges from '../components/AdminLogin/ManageColleges.vue'
import ViewStudents from '../components/AdminLogin/ViewStudents.vue'

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
      component: Admin
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
    }
  ],
  mode: 'history'
})

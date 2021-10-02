<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-container>
      <b-navbar-brand href="#"><router-link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Mkulogo.jpg" class="d-inline-block align-top" alt="Kitten" id="logo">
        MK UNIVERSITY</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto">

          <!-- Login Popup start -->
          <span><b-button variant="primary" v-b-modal.modal-1>Login</b-button></span>
            <b-modal id="modal-1" title="Login" hide-footer>
              <Login /> <!-- login component -->
            </b-modal>
          <!-- Login Popup end -->

          <!-- Register Popup start -->
          <b-nav-item-dropdown text="register" right>
            <b-dropdown-item v-b-modal.modal-2 href="#">College Register</b-dropdown-item>
              <b-modal id="modal-2" title="College Register" hide-footer>
                <CollegeRegister /> <!-- CollegeRegister component -->
              </b-modal>
            <b-dropdown-item v-b-modal.modal-3 href="#">Student Register</b-dropdown-item>
              <b-modal id="modal-3" title="Student Register" hide-footer>
              <StudentRegister /> <!-- StudentRegister component -->
              </b-modal>
          </b-nav-item-dropdown>
          <!-- Register Popup end -->

        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</div>
</template>

<script>
import Login from '../components/Login.vue'
import CollegeRegister from '../components/CollegeRegister.vue'
import StudentRegister from '../components/StudentRegister.vue'

export default {
  name: 'Header',
  components: {
    Login,
    CollegeRegister,
    StudentRegister
  }
}
</script>

<style scoped>
#logo {
 width: 35px;
 padding-left: 5px;
}
.bg-info {
 background-color: black!important;
}
div a {
 text-decoration: none;
 color:white!important;
 font-weight: bolder;
}
</style>

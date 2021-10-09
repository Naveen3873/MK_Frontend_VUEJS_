<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-container>
            <b-navbar-brand href="#" variant="light"><router-link to="/admin">
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Mkulogo.jpg" class="d-inline-block align-top" alt="Kitten" id="logo">
                MK UNIVERSITY</router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ms-auto">

                    <!-- admin dropdown -->
                    <b-dropdown text="Admin" variant="primary" class="m-2">
                        <b-dropdown-item><router-link to="/admin/approveinstitute">Approve Colleges</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/admin/managecolleges">Manage Colleges</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/admin/viewstudents">View Students</router-link></b-dropdown-item>
                        <b-dropdown-item href="#" disabled>View Complaints</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item id="logout"><router-link to="/" @click="logout()">Logout</router-link></b-dropdown-item>
                    </b-dropdown>

                    <!-- Register Popup start -->
                    <b-dropdown text="Register" variant="outline-primary" class="m-2">
                        <b-dropdown-item v-b-modal.modal-2 href="#">College Register</b-dropdown-item>
                        <b-modal id="modal-2" title="College Register" hide-footer>
                            <CollegeRegister /> <!-- CollegeRegister component -->
                        </b-modal>
                        <b-dropdown-item v-b-modal.modal-3 href="#">Student Register</b-dropdown-item>
                        <b-modal id="modal-3" title="Student Register" hide-footer>
                        <StudentRegister /> <!-- StudentRegister component -->
                        </b-modal>
                    </b-dropdown>
                    <!-- Register Popup end -->
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</div>
</template>

<script>
/* eslint-disable */
import CollegeRegister from '../CollegeRegister.vue'
import StudentRegister from '../StudentRegister.vue'

export default {
  name: 'admin-header',
  components: {
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
 font-weight: bolder;
}
</style>
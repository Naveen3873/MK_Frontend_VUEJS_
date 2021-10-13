<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-container>
            <b-navbar-brand href="#" variant="light"><router-link to="/college">
                <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/Mkulogo.jpg" class="d-inline-block align-top" alt="Kitten" id="logo">
                MK UNIVERSITY</router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ms-auto">

                    <!-- college dropdown -->
                    <b-dropdown text="Student" variant="primary" class="m-2">
                        <b-dropdown-item><router-link to="/student/sendrequest">Send request</router-link></b-dropdown-item>
                        <b-dropdown-item><router-link to="/student/sendresponse">Send response</router-link></b-dropdown-item>
                        <b-dropdown-item @click="getId()" v-b-modal.updateStudent>Update Student</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item id="logout" @click="logout()"><router-link to="/">Logout</router-link></b-dropdown-item>
                    </b-dropdown>
                        <!-- update college popup start -->
                        <b-modal id="updateStudent" title="Student Edit" hide-footer>
                            <div class="form-row">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <b-form-input type="text" class="form-control" v-model.trim="student.firstName" placeholder="Enter your firstname"></b-form-input>
                                </div>

                                <div class="form-group">
                                    <label>Last Name</label>
                                    <b-form-input type="text" class="form-control" v-model.trim="student.lastName" placeholder="Enter your lastname"></b-form-input>
                                </div>

                                <div class="form-group">
                                    <label>User Name</label>
                                    <b-form-input type="text" class="form-control" v-model.trim="student.userName" placeholder="Enter your username"></b-form-input>
                                </div>

                                <div class="form-group">
                                    <label>Email</label>
                                    <b-form-input type="email" class="form-control" v-model.trim="student.email" placeholder="Enter your email"></b-form-input>
                                </div>

                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <b-form-input type="number" class="form-control" v-model.trim="student.phoneNumber" placeholder="Enter your phoneNumber"></b-form-input>
                                </div>

                                <div class="form-group">
                                    <label>Password</label>
                                    <b-form-input type="password" class="form-control" v-model.trim="student.password" placeholder="Enter your password"></b-form-input>
                                </div>

                                <div class="form-group">
                                    <label>Student Address</label>
                                        <b-form-textarea
                                            id="textarea"
                                            v-model.trim="student.studentAddress"
                                            placeholder="Enter your address"
                                            rows="3"
                                            max-rows="6"
                                        ></b-form-textarea>
                                </div>

                                <div>
                                    <b-button type="submit" variant="primary" class="float-end mt-3" @click="updateStudent()">Update</b-button>
                                </div>
                            </div>
                        </b-modal>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</div>
</template>

<script>
/* eslint-disable */
import StudentService from '../../service/StudentService'

export default {
    name: 'StudentHeader',
    data() {
        return {
            student :{
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                phoneNumber: '',
                password: '',
                studentAddress: '',
            }
        }
    },
    methods:{
        getId : function(){
            var id = localStorage.getItem('studentId')
            this.getStudent(id);
        },
        getStudent: function(id){
            return new Promise((resolve, reject) => {
                StudentService.getStudent(id)
                .then((response) => {
                    console.log("Student is ", response.data)
                    this.student = response.data;
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        updateStudent: function(){
            return new Promise((resolve, reject) => {
                StudentService.updateStudent(this.student)
                .then(response => {
                    alert(response.data);
                    this.student.id = '',
                    this.student.studentName =  '',
                    this.student.userName =  '',
                    this.student.email = '',
                    this.student.phoneNumber = '',
                    this.student.password = '',
                    this.student.studentAddress = ''
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
            });
        },
        logout : function(){
            localStorage.removeItem('status');
            localStorage.removeItem('role');
            localStorage.removeItem('adminId');
            localStorage.removeItem('collegeId');
            localStorage.removeItem('studentId');
            this.$router.push({ name: 'HomePage' });
        }
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
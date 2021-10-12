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
                    <b-dropdown text="College" variant="primary" class="m-2">
                        <b-dropdown-item><router-link to="/college/facultymanagement">Faculty Management</router-link></b-dropdown-item>
                        <b-dropdown-item @click="getId()" v-b-modal.updateCollege>Update College</b-dropdown-item>
                        <b-dropdown-item><router-link to="/college/sendresponse">Send response</router-link></b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item id="logout"><router-link to="/">Logout</router-link></b-dropdown-item>
                    </b-dropdown>

                    <!-- update college popup start -->
                                <b-modal id="updateCollege" title="College Edit" hide-footer>
                                    <div>
                                        <div class="form-row">
                                            <div class="form-group mb-2">
                                                <label>College Name</label>
                                                <b-form-input type="text" class="form-control" v-model="college.collegeName" placeholder="Enter your college name"></b-form-input>
                                            </div>

                                            <div class="form-group mb-2">
                                                <label>User Name</label>
                                                <b-form-input type="text" class="form-control" v-model="college.userName" placeholder="Enter your username"></b-form-input>
                                            </div>

                                            <div class="form-group mb-2">
                                                <label>Email</label>
                                                <b-form-input type="email" class="form-control" v-model="college.email" placeholder="Enter your email"></b-form-input>
                                            </div>

                                            <div class="form-group mb-2">
                                                <label>Phone Number</label>
                                                <b-form-input type="number" class="form-control" v-model="college.phoneNumber" placeholder="Enter your phone number"></b-form-input>
                                            </div>

                                            <div class="form-group mb-2">
                                                <label>Password</label>
                                                <b-form-input type="password" class="form-control" v-model="college.password" placeholder="Enter your password"></b-form-input>
                                            </div>

                                            <div class="form-group mb-2">
                                                <label>College Address</label>
                                                    <b-form-textarea
                                                        id="textarea"
                                                        v-model="college.collegeAddress"
                                                        placeholder="Enter your address"
                                                        rows="3"
                                                        max-rows="6">
                                                    </b-form-textarea>
                                            </div>
                                            <b-button type="submit" variant="primary" class="float-end mt-3" @click="updateCollege()">update</b-button>
                                        </div>
                                    </div>
                                </b-modal>
                    <!-- update college popup end -->
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</div>
</template>

<script>
/* eslint-disable */
import CollegeService from '../../service/CollegeService'

export default {
    name: 'CollegeHeader',
    data() {
        return{
            college:{
                id: '',
                collegeName: '',
                userName: '',
                email: '',
                phoneNumber: '',
                password: '',
                collegeAddress: ''
            },
            id: ''
        }
    },
    methods: {
        getId : function(){
            var id = localStorage.getItem('collegeId')
            this.getCollege(id);
        },
        getCollege: function(id){
            return new Promise((resolve, reject) => {
                CollegeService.getCollege(id)
                .then((response) => {
                    console.log("College is ", response.data);
                    this.college = response.data;
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        updateCollege: function(){
            return new Promise((resolve, reject) => {
                CollegeService.updateCollege(this.college)
                .then(response => {
                    alert(response.data);
                    this.college.id = '',
                    this.college.collegeName =  '',
                    this.college.userName =  '',
                    this.college.email = '',
                    this.college.phoneNumber = '',
                    this.college.password = '',
                    this.college.collegeAddress = ''
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
            });
        },
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
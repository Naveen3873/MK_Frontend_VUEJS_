<template>
<div>
<admin-header />
<sub-header />
    <b-container>
        <p class="display-4 text-primary mt-5 mx-5">VIEW STUDENTS</p>
        <div class="table-responsive">
            <table class="table table-striped table-bordered border-primary table-hover text-center">
                <thead class="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Student Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Password</th>
                        <th>Student Address</th>
                        <th>College</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="s in students" :key="s.id">
                        <td>{{ s.id }}</td>
                        <td>{{ s.firstName }}{{ s.lastName }}</td>
                        <td>{{ s.userName }}</td>
                        <td>{{ s.email }}</td>
                        <td>{{ s.phoneNumber }}</td>
                        <td>{{ s.password }}</td>
                        <td>{{ s.studentAddress }}</td>
                        <td>{{ s.selectedCollege }}</td>
                        <td>
                            <!-- Student edit and update start-->
                            <span><b-icon icon="pencil-fill" @click="getStudent(s.id)" v-b-modal.studentEdit></b-icon>
                                <b-modal id="studentEdit" title="Student Edit" hide-footer>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <b-form-input type="text" class="form-control" v-model="student.firstName" placeholder="Enter your firstname"></b-form-input>
                                        </div>

                                        <div class="form-group">
                                            <label>Last Name</label>
                                            <b-form-input type="text" class="form-control" v-model="student.lastName" placeholder="Enter your lastname"></b-form-input>
                                        </div>

                                        <div class="form-group">
                                            <label>User Name</label>
                                            <b-form-input type="text" class="form-control" v-model="student.userName" placeholder="Enter your username"></b-form-input>
                                        </div>

                                        <div class="form-group">
                                            <label>Email</label>
                                            <b-form-input type="email" class="form-control" v-model="student.email" placeholder="Enter your email"></b-form-input>
                                        </div>

                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <b-form-input type="number" class="form-control" v-model="student.phoneNumber" placeholder="Enter your phoneNumber"></b-form-input>
                                        </div>

                                        <div class="form-group">
                                            <label>Password</label>
                                            <b-form-input type="password" class="form-control" v-model="student.password" placeholder="Enter your password"></b-form-input>
                                        </div>

                                        <div class="form-group">
                                            <label>Student Address</label>
                                                <b-form-textarea
                                                    id="textarea"
                                                    v-model="student.studentAddress"
                                                    placeholder="Enter your address"
                                                    rows="3"
                                                    max-rows="6"
                                                ></b-form-textarea>
                                        </div>
                                        <div>
                                            <b-button type="submit" variant="primary" @click="updateStudent()" class="float-end mt-3">Update</b-button>
                                        </div>
                                    </div>
                                </b-modal>
                                </span>
                            <!-- Student edit and update end-->
                            <span>|</span>
                            <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteStudent(s.id)"></b-icon></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </b-container>
<Footer />
</div>
</template>

<script>
/* eslint-disable */
import StudentService from '../../service/StudentService'
import Footer from '../Footer.vue'
import SubHeader from '../SubHeader.vue'
import AdminHeader from './AdminHeader.vue'

export default {
    name: 'ViewStudents',
    components: {
        AdminHeader,
        Footer,
        SubHeader
    },
    data() {
        return{
            student:{
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                phoneNumber: '',
                password: '',
                studentAddress: ''
            },
            students: ''
        }
    },
    mounted(){
        this.getAllStudents();
        verified();
    },
    methods: {
        getAllStudents: function(){
            return new Promise((resolve, reject) => {
                StudentService.getAllStudents()
                .then((response) => {
                    this.students = response.data;
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        deleteStudent: function(id){
            return new Promise((resolve, reject) => {
                StudentService.deleteStudent(id)
                .then((response) => {
                    alert(id+" deleted")
                    this.getAllStudents();
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
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
                    this.getAllStudents();
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
<<<<<<< HEAD
        },
        verified : function(){
            localStorage.setItem('status','unverified')
=======
>>>>>>> d751150c819c972f2fd3d961ce5b8c9c3d5eede1
        }
    }
}
</script>
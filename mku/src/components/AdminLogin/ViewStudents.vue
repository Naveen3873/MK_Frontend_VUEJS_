<template>
<div>
<admin-header />
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
                            <span><b-icon-pencil-square></b-icon-pencil-square></span>
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
import AdminHeader from './AdminHeader.vue'

export default {
    name: 'ViewStudents',
    components: {
        AdminHeader,
        Footer
    },
    data() {
        return{
            students: ''
        }
    },
    mounted(){
        this.getAllStudents();
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
        }
    }
}
</script>
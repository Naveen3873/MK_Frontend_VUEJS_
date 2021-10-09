<template>
<div>
<admin-header />
<sub-header />
    <b-container>
        <p class="display-4 text-primary mt-5 mx-5">MANAGE COLLEGES</p>
        <div class="table-responsive">
            <table class="table table-striped table-bordered border-primary table-hover text-center">
                <thead class="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Collge Name</th>
                        <th>User Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>College Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="c in colleges" :key="c.id">
                        <td>{{ c.id }}</td>
                        <td>{{ c.collegeName }}</td>
                        <td>{{ c.userName }}</td>
                        <td>{{ c.email }}</td>
                        <td>{{ c.phoneNumber }}</td>
                        <td>{{ c.password }}</td>
                        <td>{{ c.collegeAddress }}</td>
                        <td>
                            <!-- College edit and update start-->
                            <b-icon @click="getCollege(c.id)" icon="pencil-fill" v-b-modal.model-5 aria-hidden="true"></b-icon>
                                <b-modal id="model-5" title="College Edit" hide-footer>
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
                                                        placeholder="Enter your address"
                                                        v-model="college.collegeAddress"
                                                        rows="3"
                                                        max-rows="6">
                                                    </b-form-textarea>
                                            </div>
                                            <b-button type="submit" variant="primary" @click="updateCollege()" class="float-end mt-3">update</b-button>
                                        </div>
                                    </div>
                                </b-modal>
                            <!-- College edit and update end-->
                            <span>|</span>
                            <span><b-icon icon="trash-fill" @click="deleteCollege(id)" aria-hidden="true"></b-icon></span>
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
/*eslint-disable */
import CollegeService from '../../service/CollegeService'
import AdminHeader from './AdminHeader.vue'
import Footer from '../Footer.vue'
import SubHeader from '../SubHeader.vue'

export default {
    name: 'ManageColleges',
    components: {
        AdminHeader,
        Footer,
        SubHeader
    },
    data() {
        return{
            college:{
                id:'',
                collegeName: '',
                userName: '',
                email: '',
                phoneNumber: '',
                password: '',
                collegeAddress: ''
            },
            colleges: ''
        }
    },
    mounted(){
        this.getAllColleges();
        this.logout();
    },
    methods: {
        getAllColleges: function(){
            return new Promise((resolve, reject) => {
                CollegeService.getAllColleges()
                .then((response) => {
                    this.colleges = response.data;
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        deleteCollege: function(id){
            return new Promise((resolve, reject) => {
                CollegeService.deleteCollege(id)
                .then((response) => {
                    alert(id+" deleted")
                    this.getAllColleges();
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        getCollege: function(id){
            return new Promise((resolve, reject) => {
                CollegeService.getCollege(id)
                .then((response) => {
                    console.log("College is ", response.data)
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
                    this.getAllColleges();
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
        logout : function(){
            localStorage.setItem('status','unverified')
        }
    }
}
</script>
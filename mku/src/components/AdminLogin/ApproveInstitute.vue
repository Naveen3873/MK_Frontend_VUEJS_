<template>
<div>
<admin-header />
<sub-header />
    <b-container>
        <p class="display-4 text-primary mt-5 mx-5">APPROVE INSTITUTE</p>
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
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="c in colleges" :key="c.id">
                        <td>{{c.id}}</td>
                        <td>{{c.collegeName}}</td>
                        <td>{{c.userName}}</td>
                        <td>{{c.email}}</td>
                        <td>{{c.phoneNumber}}</td>
                        <td>{{c.password}}</td>
                        <td>{{c.collegeAddress}}</td>
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
    name: 'ApproveInstitute',
    components: {
        AdminHeader,
        Footer,
        SubHeader
    },
    data() {
        return{
            colleges: ''
        }
    },
    mounted(){
        this.getAllColleges();
        this.verified();
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
        verified : function(){
            localStorage.setItem('status','unverified')
        }
    }
}
</script>
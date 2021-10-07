<template>
<div>
    <div class="form-row">
        <div class="form-group mb-2">
            <label>College Name</label>
            <b-form-input type="text" class="form-control" v-model.trim="college.collegeName" placeholder="Enter your college name"></b-form-input>
        </div>

        <div class="form-group mb-2">
            <label>User Name</label>
            <b-form-input type="text" class="form-control" v-model.trim="college.userName" placeholder="Enter your username"></b-form-input>
        </div>

        <div class="form-group mb-2">
            <label>Email</label>
            <b-form-input type="email" class="form-control" v-model.trim="college.email" placeholder="Enter your email"></b-form-input>
        </div>

        <div class="form-group mb-2">
            <label>Phone Number</label>
            <b-form-input type="number" class="form-control" v-model.trim="college.phoneNumber" placeholder="Enter your phone number"></b-form-input>
        </div>

        <div class="form-group mb-2">
            <label>Password</label>
            <b-form-input type="password" class="form-control" v-model.trim="college.password" placeholder="Enter your password"></b-form-input>
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

        <b-button variant="primary" @click="insertCollege()" class="float-end mt-3">submit</b-button>
    </div>
</div>
</template>

<style scoped>
body {
  padding: 1rem;
}
div .form-group {
 margin-bottom: 5px;
}
</style>

<script>
/* eslint-disable */
import CollegeService from '../service/CollegeService.js'

export default {
    name: 'collegeRegister',
    data () {
        return {
            college:{
                id:'',
                collegeName: '',
                userName: '',
                email: '',
                phoneNumber: '',
                password: '',
                collegeAddress: ''
            }
        }
    },
    methods: {
        insertCollege: function(){
            return new Promise((resolve, reject) => {
                CollegeService.putCollege(this.college)
                .then((response) => {
                    alert(response.data);
                    this.college.collegeName = "";
                    this.college.userName = "";
                    this.college.email = "";
                    this.college.phoneNumber = "";
                    this.college.password = "";
                    this.college.collegeAddress = "";
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        }
    }
}
</script>
<template>
<div>
    <div class="form-row">
        <div class="form-group">
            <label>College Name</label>
            <b-form-input type="text" class="form-control" v-model="college.collegeName"></b-form-input>
        </div>

        <div class="form-group">
            <label>User Name</label>
            <b-form-input type="text" class="form-control" v-model="college.userName"></b-form-input>
        </div>

        <div class="form-group">
            <label>Email</label>
            <b-form-input type="email" class="form-control" v-model="college.email"></b-form-input>
        </div>

        <div class="form-group">
            <label>Phone Number</label>
            <b-form-input type="number" class="form-control" v-model="college.phoneNumber"></b-form-input>
        </div>

        <div class="form-group">
            <label>Password</label>
            <b-form-input type="password" class="form-control" v-model="college.password"></b-form-input>
        </div>

        <div class="form-group">
            <label>College Address</label>
                <b-form-textarea
                    id="textarea"
                    v-model="college.collegeAddress"
                    placeholder="Enter your address..."
                    rows="3"
                    max-rows="6">
                </b-form-textarea>
        </div>

        <button class="btn btn-primary mt-3" @click="putCollege()">submit</button>
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
import axios from 'axios';

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
                putCollege: function(){
                   var authAxios = axios.create({
                    baseURL: "http://localhost:8080",
                });
                let config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                return new Promise((resolve, reject) => {
                    authAxios
                        .post("/college/insert",this.college, config)
                        .then(response => {
                             alert("insert succes");
                                resolve(response);
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
                },

        // putCollege: function(){
        //     return new Promise((resolve, reject) => {
        //         CollegeService.putCollege(this.college)
        //         .then((response) => {
        //             alert("insert successfully");
        //             resolve(response);
        //         }).catch((err) => {
        //             reject(err);
        //         });
        //     });
        // }
    }
}
</script>
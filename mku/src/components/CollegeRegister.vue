<template>
<div>
<form>
    <div class="form-row">
        <div class="form-group mb-2">
            <label>College Name</label>
            <b-form-input type="text" class="form-control" v-model.trim="$v.college.collegeName.$model" :class="{'is-invalid':$v.college.collegeName.$error, 'is-valid':!$v.college.collegeName.$invalid}" placeholder="Enter your collegename"></b-form-input>
            <div class="valid-feedback">Your college name is valid!</div>
            <div class="invalid-feedback">
                <span v-if="!$v.college.collegeName.required">College Name is required</span>
            </div>
        </div>

        <div class="form-group">
            <label>User Name</label>
            <input type="text" class="form-control" v-model.trim="$v.college.userName.$model" :class="{'is-invalid':$v.college.userName.$error, 'is-valid':!$v.college.userName.$invalid}" placeholder="Enter your username">
            <div class="valid-feedback">Your user name is valid!</div>
            <div class="invalid-feedback">
            <span v-if="!$v.college.userName.required">Username is required</span>
            <span v-if="!$v.college.userName.isUnique">Username is already registered.</span>
            </div>
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model.trim="$v.college.email.$model" :class="{'is-invalid':$v.college.email.$error, 'is-valid':!$v.college.email.$invalid}" placeholder="Enter your email">
            <div class="valid-feedback">Your email is valid!</div>
            <div class="invalid-feedback">
            <span v-if="!$v.college.email.required">Email is required</span>
            <span v-if="!$v.college.email.isUnique">The email is already registered.</span>
            </div>
        </div>

        <div class="form-group">
            <label>Phone Number</label>
            <input type="number" class="form-control" v-model.number.lazy="$v.college.phoneNumber.$model" :class="{'is-invalid':$v.college.phoneNumber.$error, 'is-valid':!$v.college.phoneNumber.$invalid}" placeholder="Enter your number">
            <div class="valid-feedback">Your number is valid!</div>
            <div class="invalid-feedback">
            <span v-if="!$v.college.phoneNumber.required">Phone number is required</span>
            <span v-if="!$v.college.phoneNumber.numeric">Only numeric accepted</span>
            </div>
        </div>

        <div class="form-group">
            <label>Create Password</label>
            <input type="password" id="password" class="form-control" v-model.trim="$v.college.password.$model" :class="{'is-invalid':$v.college.password.$error, 'is-valid':!$v.college.password.$invalid}">
            <div class="valid-feedback">Your password is valid!</div>
            <div class="invalid-feedback">
            <span v-if="!$v.college.password.required">Password is required</span>
            <span v-if="!$v.college.password.minLength">{{ $v.college.password.$params.minLength.min }}characters minimum</span>
            </div>
        </div>

        <div class="form-group form-check">
            <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleShowPassword" v-model="showpassword">
            <label class="form-check-label" for showpassword>Show password</label>
        </div>

        <div class="form-group">
            <label>College Address</label>
            <b-form-textarea
                    id="textarea"
                    v-model="college.collegeAddress"
                    placeholder="Enter your address..."
                    rows="3"
                    max-rows="6"
            ></b-form-textarea>
        </div>

        <div>
            <b-button variant="primary" @click="insertCollege()" class="float-end mt-3">submit</b-button>
        </div>
    </div>
</form>
</div>
</template>

<script>
/* eslint-disable */
import CollegeService from '../service/CollegeService.js'
import { required, minLength, maxLength, email, sameAs, numeric } from "vuelidate/lib/validators";

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
            },
            // confirmPassword: '',
            showpassword: false,
            submitstatus: null
        }
    },
    validations: {
        college: {
            collegeName: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(30)
            },
            userName: {
            required,
            isUnique (value) {
                if(value === '') return true

                return new Promise((resolve) => {
                    setTimeout(() => {
                            resolve(typeof value === 'string' && value.length % 2 !== 0)
                    }, 350 + Math.random() * 300)
                })
            }
            },
            email: {
            required,
            email,
            isUnique (value) {
                if(value === '') return true

                var email_regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                return new Promise((resolve) => {
                    setTimeout(() => {
                            resolve(email_regex.test(value))
                    }, 350 + Math.random() * 300)
                })
            }
            },
            password: {
                required,
                minLength: minLength(8)
            },
            phoneNumber: {
                required,
                numeric,
                minLength: minLength(8)
            }

        },
    },
    methods: {
        toggleShowPassword () {
            var show = document.getElementById('password')
                if(this.showpassword == false){
                    this.showpassword = true
                    show.type = "text"
                }
                else {
                    this.showpassword = false
                    show.type = "password"
                }
        },
        insertCollege: function(){
            this.$v.$touch()
                if(this.$v.$invalid){
                    this.submitstatus = "FAIL"
                }
                else {
                    this.submitstatus = "SUCCESS"
                    return new Promise((resolve, reject) => {
                        CollegeService.putCollege(this.college)
                        .then((response) => {
                            alert(response.data);
                            this.college.collegeName = "";
                            this.college.userName = "";
                            this.college.email = "";
                            this.college.phoneNumber = "";
                            this.college.password = "";
                            window.location.reload();
                            resolve(response);
                        }).catch((err) => {
                            reject(err);
                        });
                    });
                }
        }
    }
}
</script>

<style scoped>
body {
  padding: 1rem;
}
div .form-group {
 margin-bottom: 5px;
}
</style>
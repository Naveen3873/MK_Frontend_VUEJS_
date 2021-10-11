<template>
<div>
   <div class="form-row">
      <div class="form-group">
         <label>First Name</label>
         <input type="text" class="form-control" v-model.trim="$v.student.firstName.$model" :class="{'is-invalid':$v.student.firstName.$error, 'is-valid':!$v.student.firstName.$invalid}" placeholder="enter your firstname">
         <div class="valid-feedback">Your firstname is valid!</div>
         <div class="invalid-feedback">
            <span v-if="!$v.student.firstName.required">First Name is required</span>
         </div>
      </div>

      <div class="form-group">
         <label>Last Name</label>
         <input type="text" class="form-control" v-model.trim="$v.student.lastName.$model" :class="{'is-invalid':$v.student.lastName.$error, 'is-valid':!$v.student.lastName.$invalid}" placeholder="enter your lastname">
         <div class="valid-feedback">Your lastname is valid!</div>
         <div class="invalid-feedback">
            <span v-if="!$v.student.lastName.required">Last Name is required</span>
         </div>
      </div>

      <div class="form-group">
         <label>User Name</label>
         <input type="text" class="form-control" v-model.trim="$v.student.userName.$model" :class="{'is-invalid':$v.student.userName.$error, 'is-valid':!$v.student.userName.$invalid}" placeholder="enter your username">
         <div class="valid-feedback">Your username is valid!</div>
         <div class="invalid-feedback">
            <span v-if="!$v.student.userName.required">Username is required</span>
            <span v-if="!$v.student.userName.isUnique">Username is already registered.</span>
         </div>
      </div>

      <div class="form-group">
         <label>Email</label>
         <input type="email" class="form-control" v-model.trim="$v.student.email.$model" :class="{'is-invalid':$v.student.email.$error, 'is-valid':!$v.student.email.$invalid}" placeholder="enter your email">
         <div class="valid-feedback">Your email is valid!</div>
         <div class="invalid-feedback">
            <span v-if="!$v.student.email.required">Email is required</span>
            <span v-if="!$v.student.email.isUnique">The email is invalid.</span>
         </div>
      </div>

      <div class="form-group">
         <label>Phone Number</label>
         <input type="number" class="form-control" v-model.number.lazy="$v.student.phoneNumber.$model" :class="{'is-invalid':$v.student.phoneNumber.$error, 'is-valid':!$v.student.phoneNumber.$invalid}" placeholder="enter your number">
         <div class="valid-feedback">Your number is valid!</div>
         <div class="invalid-feedback">
            <span v-if="!$v.student.phoneNumber.required">Phone number is required</span>
            <span v-if="!$v.student.phoneNumber.numeric">Only numeric accepted</span>
         </div>
      </div>

      <div class="form-group">
         <label>Password</label>
         <input type="password" id="password" class="form-control" v-model.trim="$v.student.password.$model" :class="{'is-invalid':$v.student.password.$error, 'is-valid':!$v.student.password.$invalid}" placeholder="create your new password">
         <div class="valid-feedback">Your password is valid!</div>
         <div class="invalid-feedback">
            <span v-if="!$v.student.password.required">Password is required</span>
            <span v-if="!$v.student.password.minLength">{{ $v.student.password.$params.minLength.min }}characters minimum</span>
         </div>
      </div>

      <div class="form-group form-check">
         <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleShowPassword" v-model="showpassword">
         <label class="form-check-label" for showpassword>Show password</label>
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

      <div class="form-group">
         <label>College</label><br>
            <b-form-select class="form-control" v-model="student.selectedCollege" :options="student.options"></b-form-select>
      </div>
      <div>
         <b-button type="submit" variant="primary" @click="insertStudent()" class="float-end mt-3">Submit</b-button>
      </div>
   </div>
</div>
</template>

<script>
/* eslint-disable */
import StudentService from '../service/StudentService.js'
import { required, minLength, maxLength, email, numeric } from "vuelidate/lib/validators";

export default {
   name: 'collegeRegister',
   data () {
      return {
         student:{
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            phoneNumber: '',
            password: '',
            studentAddress: '',
            selectedCollege: null,
            options: [
               { value: null, text: 'Please select an option' },
               { value: 'sacs', text: 'SACS College' },
               { value: 'thiyagarajar', text: 'Thiyagarajar College' },
               { value: 'mannar', text: 'Mannar College' }
            ]
         },
            showpassword: false,
            submitstatus: null
      }
   },
   validations: {
      student:{
         firstName: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(30)
         },
         lastName: {
            required,
            minLength: minLength(1),
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
         phoneNumber: {
            required,
            numeric,
            minLength: minLength(9)
         },
         password: {
            required,
            minLength: minLength(8)
         },
         selectedCollege: {
            required
         }
      }
   },
   methods: {
      insertStudent: function(){
         this.$v.$touch()
            if(this.$v.$invalid){
               this.submitstatus = "FAIL"
            }
            else {
               this.submitstatus = "SUCCESS"
               return new Promise((resolve, reject) => {
                     StudentService.putStudent(this.student)
                     .then((response) => {
                        this.student = response.data;
                        alert(response.data);
                        window.location.reload();
                        this.student.firstName = "";
                        this.student.lastName = "";
                        this.student.userName = "";
                        this.student.email = "";
                        this.student.phoneNumber = "";
                        this.student.password = "";
                        this.student.studentAddress = "";
                        this.student.selectedCollege = "";
                        this.student.options = null;
                        resolve(response);
                     }).catch((err) => {
                        reject(err);
                     });
               });
            }
      },
      toggleShowPassword () {
         var show = document.getElementById('password')
            if(this.showpassword == false){
               this.showpassword = true
               show.type = "text"
            }
            else {
               this.showpassword = false
               show.type = "Password"
            }
      },
   }
}
</script>

<style scoped>
body {
  padding: 1rem;
}
</style>

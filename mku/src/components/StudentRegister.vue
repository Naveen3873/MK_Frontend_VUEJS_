<template>
<div>
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
         }
      }
   },
   methods: {
      insertStudent: function(){
         return new Promise((resolve, reject) => {
               StudentService.putStudent(this.student)
               .then((response) => {
                  this.student = response.data;
                  alert(response.data);
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
   }
}
</script>

<style scoped>
body {
  padding: 1rem;
}
</style>

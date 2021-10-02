<template>
<div>
     <b-form ref="form" @submit.stop.prevent="submitForm">

        <div>
           <b-form-radio-group v-model="selected">
                <b-container>
                <b-row>
                <b-col>
                 <b-form-radio v-model="selected" v-bind:value="1">Admin</b-form-radio>
                </b-col>
                <b-col>
                 <b-form-radio v-model="selected" v-bind:value="2" >College</b-form-radio>
                </b-col>
                <b-col>
                 <b-form-radio v-model="selected" v-bind:value="3">Student</b-form-radio>
                </b-col>
                </b-row>
                </b-container>
             </b-form-radio-group>
        </div>

        <div class="form-row">
          <div class="form-group my-2">
             <label>User Id</label>
             <input type="text" id="user" class="form-control" v-model.trim="$v.userId.$model" :class="{'is-invalid':$v.userId.$error, 'is-valid':!$v.userId.$invalid}">

             <div class="invalid-feedback">
                <span v-if="!$v.userId.required">userid is required</span>
             </div>
          </div>

          <div class="form-group my-3">
             <label>Password</label>
             <input type="password" id="psw" class="form-control" v-model.trim="$v.password.$model" :class="{'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid}">

             <div class="invalid-feedback">
                <span v-if="!$v.password.required">password is required</span>
             </div>
          </div>
          <div>
           <p class="mt-2 float-end"><a href="#">forgot possword?</a></p>
          </div>
          <button type="submit" class="btn btn-primary mt-3 px-5 block">Login</button>
        </div>
     </b-form>
</div>
</template>

<style scoped>
body {
  padding: 1rem;
}
div .form-group {
 margin-bottom: 5px;
}
div button {
 margin-top:20px;
}
.block {
 display: block;
 width: 100%;
}
</style>

<script>
/* eslint-disable */
import { required } from "vuelidate/lib/validators";

export default {
 name: 'login',
 data () {
   return {
     userId: '',
     password: '',
     selected: '1',
     submitstatus: null
   }
 },
 validations: {
     userId: {
       required
     },
     password: {
       required
     }
 },
 methods: {
   submitForm() {
     this.$v.$touch();

     if(this.selected == 1) {
        if(this.$v.$invalid){
          this.submitstatus = "FAIL"
          return;
        }
          this.submitstatus = "SUCCESS"
          alert("Submit successfully");
          window.location.replace("/admin");
     }
     else if(this.selected == 2) {
        if(this.$v.$invalid){
          this.submitstatus = "FAIL"
          return;
        }
          this.submitstatus = "SUCCESS"
          alert("Submit successfully");
          window.location.replace("/college");
     }
     else if(this.selected == 3) {
        if(this.$v.$invalid){
          this.submitstatus = "FAIL"
          return;
        }
          this.submitstatus = "SUCCESS"
          alert("Submit successfully");
          window.location.replace("/student");
     }
     else {
          alert("invalid username and password");
     }
     }
   }
}
</script>

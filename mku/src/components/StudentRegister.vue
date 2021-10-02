<template>
<div>
     <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
             <label>First Name</label>
             <input type="text" class="form-control" v-model.trim="$v.firstName.$model" :class="{'is-invalid':$v.firstName.$error, 'is-valid':!$v.firstName.$invalid}">
             <div class="valid-feedback">Your college name is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.firstName.required">First Name is required</span>
             </div>
          </div>

          <div class="form-group">
             <label>Last Name</label>
             <input type="text" class="form-control" v-model.trim="$v.lastName.$model" :class="{'is-invalid':$v.lastName.$error, 'is-valid':!$v.lastName.$invalid}">
             <div class="valid-feedback">Your college name is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.lastName.required">Last Name is required</span>
             </div>
          </div>

          <div class="form-group">
             <label>User Name</label>
             <input type="text" class="form-control" v-model.trim="$v.userName.$model" :class="{'is-invalid':$v.userName.$error, 'is-valid':!$v.userName.$invalid}">
             <div class="valid-feedback">Your user name is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.userName.required">Username is required</span>
                <span v-if="!$v.userName.isUnique">Username is already registered.</span>
             </div>
          </div>

          <div class="form-group">
             <label>Email</label>
             <input type="email" class="form-control" v-model.trim="$v.email.$model" :class="{'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid}">
             <div class="valid-feedback">Your email is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.email.required">Email is required</span>
                <span v-if="!$v.email.isUnique">The email is already registered.</span>
             </div>
          </div>

          <div class="form-group">
             <label>Phone Number</label>
             <input type="number" class="form-control" v-model.number.lazy="$v.phone.$model" :class="{'is-invalid':$v.phone.$error, 'is-valid':!$v.phone.$invalid}">
             <div class="valid-feedback">Your number is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.phone.required">Phone number is required</span>
                <span v-if="!$v.phone.numeric">Only numeric accepted</span>
             </div>
          </div>

          <div class="form-group">
             <label>Create Password</label>
             <input type="password" id="createPassword" class="form-control" v-model.trim="$v.createPassword.$model" :class="{'is-invalid':$v.createPassword.$error, 'is-valid':!$v.createPassword.$invalid}">
             <div class="valid-feedback">Your password is valid!</div>
             <div class="invalid-feedback">
                <span v-if="!$v.createPassword.required">Password is required</span>
                <span v-if="!$v.createPassword.minLength">{{ $v.createPassword.$params.minLength.min }}characters minimum</span>
             </div>
          </div>

          <div class="form-group form-check">
             <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleShowPassword" v-model="showpassword">
             <label class="form-check-label" for showpassword>Show password</label>
          </div>

          <div class="form-group">
             <label>Confirm Password</label>
             <input type="password" class="form-control" v-model.trim="$v.confirmPassword.$model" :class="{'is-invalid':$v.confirmPassword.$error, 'is-valid': (createPassword != '') ? !$v.confirmPassword.$invalid: '' }">
             <div class="valid-feedback">Your password is identical</div>
             <div class="invalid-feedback">
                <span v-if="!$v.confirmPassword.sameAsPassword">Password must be identical</span>
             </div>
          </div>

          <div class="form-group">
             <label>Student Address</label>
                <b-form-textarea
                      id="textarea"
                      v-model="text"
                      placeholder="Enter your address..."
                      rows="3"
                      max-rows="6"
                ></b-form-textarea>
          </div>

          <div class="form-group">
             <label>College</label><br>
             <b-form-select v-model="selected" :options="options"></b-form-select>
          </div>

          <button type="submit" class="btn btn-primary mt-3">Submit</button>
          <button class="btn btn-secondary mt-3 float-end" @click="resetForm()">Reset</button>
        </div>
     </form>
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
export default {
 name: 'collegeRegister',
 data () {
   return {
     firstName: '',
     lastName: '',
     userName: '',
     email: '',
     createPassword: '',
     confirmPassword: '',
     showpassword: false,
     phone: ''
   }
 }
}
</script>

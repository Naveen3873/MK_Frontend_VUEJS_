<template>
<div>
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
      <label>User Name</label>
      <b-form-input type="text" class="form-control" v-model.trim="userName" placeholder="Enter your username"></b-form-input>
    </div>

    <div class="form-group my-3">
      <label>Password</label>
      <b-form-input type="password" class="form-control" v-model.trim="password" placeholder="Enter your username"></b-form-input>
    </div>
    <div>
      <p class="mt-2 float-end"><a href="#">forgot possword?</a></p>
    </div>
    <div>
      <button type="submit" class="btn btn-primary mt-3 px-5 block">Login</button>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import { required } from "vuelidate/lib/validators";

export default {
  name: 'login',
  data () {
    return {
      userName: '',
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
div button {
 margin-top:20px;
}
.block {
 display: block;
 width: 100%;
}
</style>
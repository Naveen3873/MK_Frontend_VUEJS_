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
      <b-form-input type="text" class="form-control" v-model.trim="login.userName" placeholder="Enter your username"></b-form-input>
    </div>

    <div class="form-group my-3">
      <label>Password</label>
      <b-form-input type="password" class="form-control" v-model.trim="login.password" placeholder="Enter your username"></b-form-input>
    </div>
    <!-- <div>
      <p class="mt-2 float-end"><a href="#">forgot possword?</a></p>
    </div> -->
    <div>
      <button type="submit" @click="findByUsernameAndPassword()" class="btn btn-primary mt-3 px-5 block">Login</button>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import { required } from "vuelidate/lib/validators";
import axios from 'axios';

export default {
  name: 'login',
  data () {
    return {
      login:{
        userName: '',
        password: ''
      },
      selected: '1'
    }
  },
  validations: {
    userName: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    findByUsernameAndPassword() {
      var axi = axios.create({
      baseURL: `http://localhost:9090/`
      });
      let config = {
          headers: {
              "Content-Type": "application/json"
          }
      };
      if(this.selected == 1){
        return new Promise((resolve, reject) => {
            axi
            .post("/admin/user", this.login, config)
            .then((response) => {
                alert("login successfully");
                localStorage.setItem('name', this.login.userName)
                localStorage.setItem('status','verified')
                this.$router.push({name:'admin'})
                this.login.userName = "";
                this.login.password = "";
                resolve(response);
            }).catch((err) => {
                alert("login failed");
                localStorage.setItem('status','unverified')
                reject(err);
            });
        });
      }
      if(this.selected == 2){
        return new Promise((resolve, reject) => {
            axi
            .post("/college/user", this.login, config)
            .then((response) => {
                alert("login successfully");
                this.login.userName = "";
                this.login.password = "";
                window.location.replace("/college");
                resolve(response);
            }).catch((err) => {
                alert("login failed");
                reject(err);
            });
        });
      }
      if(this.selected == 3){
        return new Promise((resolve, reject) => {
            axi
            .post("/student/user", this.login, config)
            .then((response) => {
                alert("login successfully");
                this.login.userName = "";
                this.login.password = "";
                window.location.replace("/student");
                resolve(response);
            }).catch((err) => {
                alert("login failed");
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
div button {
 margin-top:20px;
}
.block {
 display: block;
 width: 100%;
}
</style>
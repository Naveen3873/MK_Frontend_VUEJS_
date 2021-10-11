<template>
  <div>
    <student-header />
    <sub-header />
    <b-container>
      <div>
          <b-form-group label="Student Name:">
            <b-form-input
              v-model="request.studentName"
              placeholder="Enter your name"
            >
            </b-form-input> </b-form-group
          ><br />

          <b-form-group label="Request:">
            <b-form-textarea
              cols="35"
              rows="4"
              v-model="request.message"
              placeholder="Enter your Requests"
            >
            </b-form-textarea> </b-form-group
          ><br />

          <div class="text-center">
            <b-button
              type="submit"
              variant="outline-primary"
              @click="putRequest()"
              >Submit</b-button
            >
          </div>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Footer from '../Footer.vue';
import SubHeader from '../SubHeader.vue';
import StudentService from '../../service/StudentService'
import StudentHeader from './StudentHeader.vue';
export default {
    components: { SubHeader, Footer, StudentHeader },
    name: "SendRequest",
    data() {
        return {
            request: {
                studentName: "",
                message: ""
            },
        }
    },
    mounted(){
      this.verified();
    },
    methods: {
      putRequest: function(){
        return new Promise((resolve, reject) => {
          StudentService.putRequest(this.request)
          .then(response => {
            alert ("Request submitted");
                this.request.studentName="";
                this.request.message="";
                window.location.reload();
                resolve(response);
          })
          .catch(err => {
            reject(err);
          });
        });
      },
      verified : function(){
          localStorage.setItem('status','verified')
      }
  }
};
</script>
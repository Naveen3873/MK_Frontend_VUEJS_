<template>
<div>
<college-header />
<sub-header />
    <b-container>
        <div class="text-center text-primary mt-3">
            <h3>Send Response</h3>
        </div>
            <b-form-group>
                    <b-form-input class="mb-2" v-model="responses.studentName" placeholder="Enter your studentname"></b-form-input>
                    <b-form-textarea cols="45" rows="6" v-model="responses.responseMessage" placeholder="Enter your Response">
                    </b-form-textarea>
            </b-form-group><br>

            <div class="text-center">
                <b-button type="submit" variant="outline-primary" @click="putResponse()">Submit</b-button>
            </div>
    </b-container>
<Footer />
</div>
</template>

<script>
import CollegeService from '../../service/CollegeService'
import Footer from '../Footer.vue'
import SubHeader from '../SubHeader.vue'
import CollegeHeader from './CollegeHeader.vue'
/* eslint-disable */
export default {
  components: { CollegeHeader, SubHeader, Footer },
    name: 'SendResponse',
    data() {
        return {
            responses: {
                studentName: '',
                responseMessage: ''
            }
        }
    },
    mounted(){
        this.verified();
    },
    methods:{
        verified : function() {
            localStorage.setItem('status','clgverified');
        },
        putResponse : function() {
            return new Promise((resolve, reject) => {
                CollegeService.putResponse(this.responses)
                .then(response => {
                alert (response.data);
                    this.responses.studentName = "";
                    this.responses.responseMessage = "";
                    // window.location.reload();
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
            });
        }
    }
}
</script>
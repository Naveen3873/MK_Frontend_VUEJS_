<template>
<div>
<college-header />
<sub-header />
    <b-container class="bv-example-row my-3">
    <div>
        <b-row class="mt-4">
            <b-col cols="4">
                <b-list-group>
                    <b-button v-b-toggle.addFaculty>Add Faculty</b-button>
                    <b-button v-b-toggle.facultyManagement>Faculty Management</b-button>
                </b-list-group>
            </b-col>
            <b-col cols="8">
                <!-- Add Faculty toggle start-->
                <b-collapse id="addFaculty">
                    <h3 class="text-center">Add Faculty</h3>
                    <div class="form-row">
                        <div class="form-group mb-2">
                            <label>Faculty Name</label>
                            <b-form-input type="text" class="form-control" v-model="faculty.name" placeholder="Enter faculty name"></b-form-input>
                        </div>

                        <div class="form-group mb-2">
                            <label>Qualification</label>
                            <b-form-input type="text" class="form-control" v-model="faculty.qualification" placeholder="Enter qualification"></b-form-input>
                        </div>

                        <div class="form-group mb-2">
                            <label>Experience or Fresher</label>
                            <b-form-input type="text" class="form-control" v-model="faculty.experience" placeholder=""></b-form-input>
                        </div>

                        <div class="form-group mb-2">
                            <label>Skill set</label>
                            <b-form-input type="text" class="form-control" v-model="faculty.skill" placeholder="optional"></b-form-input>
                        </div>
                        <b-button block variant="success" @click="insertFaculty()" class="float-end mt-3">submit</b-button>
                    </div>
                </b-collapse>
                <!-- Add Faculty toggle end-->

                <!-- Update Faculty toggle start-->
                <b-collapse id="facultyManagement" class="mt-5">
                    <div class="mt-5">
                        <h3 class="mb-2 text-center">Updata Faculty</h3>
                        <div class="form-row">
                            <div class="form-group mb-2">
                                <label>Faculty Name</label>
                                <b-form-input type="text" class="form-control" placeholder="Enter faculty name"></b-form-input>
                            </div>

                            <div class="form-group mb-2">
                                <label>Qualification</label>
                                <b-form-input type="text" class="form-control" placeholder="Enter qualification"></b-form-input>
                            </div>

                            <div class="form-group mb-2">
                                <label>Experience or Fresher</label>
                                <b-form-input type="text" class="form-control" placeholder=""></b-form-input>
                            </div>

                            <div class="form-group mb-2">
                                <label>Skill set</label>
                                <b-form-input type="text" class="form-control" placeholder="optional"></b-form-input>
                            </div>
                            <b-button block variant="success" class="float-end mt-3">update</b-button>
                        </div>
                    </div>

                </b-collapse>
                <!-- Update Faculty toggle end-->

            </b-col>
        </b-row>
    </div>
    </b-container>
<Footer />
</div>
</template>

<script>
/*eslint-disable */
import SacsCollegeService from '../../service/SacsCollegeService'
import Footer from '../Footer.vue'
import SubHeader from '../SubHeader.vue'
import CollegeHeader from './CollegeHeader.vue'

export default {
  components: { CollegeHeader, SubHeader, Footer },
    name: 'FacultyManagement',
    data () {
        return {
            faculty:{
                name: '',
                qualification: '',
                experience: '',
                skill: ''
            }
        }
    },
    mounted() {
        this.verified();
    },
    methods: {
        insertFaculty: function(){
            return new Promise((resolve, reject) => {
                SacsCollegeService.putFaculty(this.faculty)
                .then((response) => {
                    alert(response.data);
                    this.faculty.name = "";
                    this.faculty.qualification = "";
                    this.faculty.experience = "";
                    this.faculty.skill = "";
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });
        },
        verified : function(){
            localStorage.setItem('status','clgverified')
        }
    }
}
</script>
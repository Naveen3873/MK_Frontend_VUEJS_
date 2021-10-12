<template>
<div>
<Header />
<sub-header />
    <b-container fluid class="bv-example-row">
        <div id = "contact">
            <b-row>
            <b-col>
                <div class="col-md-4 my-2 text-bold mx-3" >
                    <p class="text-white text-center mx-5"><b>Map location</b></p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.922670384317!2d78.00834871379001!3d9.940392192892038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cc1ae7231cc5%3A0xd69d09e3eb9c4b0b!2sMadurai%20Kamaraj%20University!5e0!3m2!1sen!2sin!4v1631095037174!5m2!1sen!2sin" width="300" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </b-col>
            <b-col>
                <div class="col-md-8 text-light text-bold contactdet">
                    <p>Contact Info</p>
                    <p>M K University,<br>
                        Palkalai Nagar,<br>
                        Madurai, Tamilnadu, India.<br>
                        + ( 91 ) 452 - 2458471 ( 30 lines )
                        Concern Section Extension Number
                        directordde@gmail.com
                    </p>
                </div>
            </b-col>
            </b-row>
        </div>
    </b-container>
 </div>
</template>

<script>
/* eslint-disable */
import Header from './Header.vue'
import SubHeader from './SubHeader.vue'
export default {
    name: 'Contact',
    components: {
        Header,
        SubHeader
    }
}
</script>

<style scoped>
 div #contact {
  margin: 0;
  padding: 0;
  margin-top: 300px;
  background-color: black;
 }
 div .contactdet {
  margin-top: 150px;
 }
</style>
<template>
<div>
    <student-header />
    <sub-header />
    <home />
    <Footer />
</div>
</template>

<script>
/* eslint-disable */
import StudentHeader from './StudentHeader.vue'
import Footer from '../Footer.vue'
import Home from '../Home.vue'
import SubHeader from '../SubHeader.vue'

export default {
    name: 'Student',
    components: {
        StudentHeader,
        Home,
        Footer,
        SubHeader
    },
    mounted(){
        this.logout();
    },
    methods:{
        logout : function(){
            localStorage.setItem('status','unverified')
        }
    }
}
</script>
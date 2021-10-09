<template>
<div>
    <college-header />
    <sub-header />
    <home />
    <Footer />
</div>
</template>

<script>
import Footer from '../Footer.vue'
import Home from '../Home.vue'
import SubHeader from '../SubHeader.vue'
/*eslint-disable */

import CollegeHeader from './CollegeHeader.vue'
export default {
    name: 'College',
    components:{
        CollegeHeader,
        Footer,
        Home,
        SubHeader

    },
    mounted(){
        this.verified();
    },
    methods:{
        verified : function(){
            localStorage.setItem('status','unverified')
        }
    }
}
</script>
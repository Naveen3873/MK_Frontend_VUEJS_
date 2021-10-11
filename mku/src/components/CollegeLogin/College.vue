<template>
<div>
<<<<<<< HEAD
    <college-header />
    <sub-header />
    <home />
    <Footer />
=======
<college-header />
<sub-header />
<home />
<Footer />
>>>>>>> d751150c819c972f2fd3d961ce5b8c9c3d5eede1
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

<<<<<<< HEAD
    },
    mounted(){
        this.verified();
    },
    methods:{
        verified : function(){
            localStorage.setItem('status','unverified')
        }
=======
>>>>>>> d751150c819c972f2fd3d961ce5b8c9c3d5eede1
    }
}
</script>
<template>
<div>
    <admin-header />
    <sub-header />
    <home />
    <Footer />
</div>
</template>

<script>
/* eslint-disable */

import AdminHeader from './AdminHeader.vue'
import Home from '../Home.vue'
import Footer from '../Footer.vue'
import SubHeader from '../SubHeader.vue'

export default {
    name: 'Admin',
    components: {
        AdminHeader,
        Home,
        Footer,
        SubHeader
<<<<<<< HEAD
    },
    mounted(){
        this.logout();
    },
    methods:{
        logout : function(){
            localStorage.setItem('status','unverified')
        }
=======
>>>>>>> d751150c819c972f2fd3d961ce5b8c9c3d5eede1
    }
}
</script>
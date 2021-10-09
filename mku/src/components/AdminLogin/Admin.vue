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
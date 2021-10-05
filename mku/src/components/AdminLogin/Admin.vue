<template>
<div>
    <admin-header />
    <home />
    <Footer />
</div>
</template>

<script>
/* eslint-disable */
import AdminHeader from './AdminHeader.vue'
import Home from '../Home.vue'
import Footer from '../Footer.vue'

export default {
    name: 'Admin',
    components: {
        AdminHeader,
        Home,
        Footer
    }
}
</script>

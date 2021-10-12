<template>
<div>
<Header />
<sub-header />
    <b-container>
        <div class="mt-5">
                <p id="heading" class="text-primary display-4" text-center>GALLERY</p>
        </div>
        <b-breadcrumb class="mt-5 mx-3">
            <b-breadcrumb-item href="">
            <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
            <router-link to="/">Home</router-link>
            </b-breadcrumb-item>
            <b-breadcrumb-item active href="#">Gallery</b-breadcrumb-item>
        </b-breadcrumb>
    </b-container>
<Footer />
</div>
</template>

<script>
/* eslint-disable */

import Footer from './Footer'
import Header from './Header.vue'
import SubHeader from './SubHeader.vue'

export default {
    name : 'gallery',

    components : {
        Footer,
        Header,
        SubHeader,
    },
}
</script>

<style scoped>
#heading {
 padding-left: 5px;
 border-left: 3px solid;
}
</style>
<template>
<div>
    <b-container>
        <div>
            <b-navbar toggleable="lg">
            <b-collapse id="nav-collapse2" is-nav>
                <b-navbar-nav class="disabled">
                    <b-nav-item href="#" disabled>hava a question?</b-nav-item>
                    <b-nav-item href="#" disabled>9876543210</b-nav-item>
                    <b-nav-item href="#" disabled>mkinfo@gmail.com</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ms-auto">
                        <b-nav-item href="#"><router-link to="/courses">COURSES</router-link></b-nav-item>
                        <b-nav-item href="#"><router-link to="/about">ABOUT</router-link></b-nav-item>
                        <b-nav-item href="#"><router-link to="/events">EVENTS</router-link></b-nav-item>
                        <b-nav-item href="#"><router-link to="/gallery">GALLERY</router-link></b-nav-item>
                        <b-nav-item href="#"><router-link to="/contact">CONTACTS</router-link></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </b-container>
</div>
</template>

<script>
export default {
  name: 'SubHeader'
}
</script>

<style scoped>
#logo {
 width: 35px;
 padding-left: 5px;
}
div a {
 text-decoration: none;
 font-variant: primary!important;
 font-weight: bolder;

}
.disabled {
    color: black!important;
}
</style>

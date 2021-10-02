<template>
  <div>
    <Header />
    <sub-header />
    <home />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SubHeader from '../components/SubHeader.vue'
import Home from '../components/Home.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    SubHeader,
    Home,
    Footer
  }
}
</script>

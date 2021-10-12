<template>
<div>
<Header />
<sub-header />
    <b-container>
        <div class="mt-5">
                <p id="heading" class="text-primary display-4" text-center>EVENTS</p>
        </div>
        <b-breadcrumb class="mt-5 mx-3">
            <b-breadcrumb-item href="">
              <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
              <router-link to="/">Home</router-link>
            </b-breadcrumb-item>
            <b-breadcrumb-item active href="#">Events</b-breadcrumb-item>
          </b-breadcrumb>
        <div>
        <!-- tabs start -->
        <div>
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Happening" active>
                <b-card-text>
                        <b-card
                                overlay
                                img-src="https://picsum.photos/900/250/?image=3"
                                img-alt="Card Image"
                                text-variant="white"
                                title="Events"
                                sub-title="Subtitle"
                                >
                                <b-card-text>
                                Some quick example text to build on the card and make up the bulk of the card's content.
                                </b-card-text>
                        </b-card><hr>
                        <b-card
                                overlay
                                img-src="https://picsum.photos/900/250/?image=3"
                                img-alt="Card Image"
                                text-variant="white"
                                title="Events"
                                sub-title="Subtitle"
                                >
                                <b-card-text>
                                Some quick example text to build on the card and make up the bulk of the card's content.
                                </b-card-text>
                        </b-card><hr>
                        <b-card
                                overlay
                                img-src="https://picsum.photos/900/250/?image=3"
                                img-alt="Card Image"
                                text-variant="white"
                                title="Events"
                                sub-title="Subtitle"
                                >
                                <b-card-text>
                                Some quick example text to build on the card and make up the bulk of the card's content.
                                </b-card-text>
                        </b-card>
                </b-card-text>
              </b-tab>
              <b-tab title="Upcoming">
                <b-card-text>No Events</b-card-text>
              </b-tab>
              <b-tab title="Expired">
                <b-card-text>No Events</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
        <!-- tabs end -->
        </div>
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
    name : 'events',
    components : {
        Footer,
        Header,
        SubHeader,
    }
}
</script>

<style scoped>
div #heading {
 padding-left: 5px;
 border-left: 3px solid;
}
</style>
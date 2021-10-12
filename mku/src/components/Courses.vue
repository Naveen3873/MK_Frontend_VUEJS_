<template>
<div>
<Header />
<sub-header />
  <div id="courses" style="background-image: url('https://www.adorama.com/alc/wp-content/uploads/2018/01/best-online-free-photography-courses-feature.jpg')">
     <br><br><br><br>
     <p class="text-primary mx-5 my-5 display-4">COURSES --></p>
  </div>
  <div>
  <b-container>
          <b-breadcrumb>
            <b-breadcrumb-item href="">
              <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
              <router-link to="/">Home</router-link>
            </b-breadcrumb-item>
            <b-breadcrumb-item active href="#">courses</b-breadcrumb-item>
          </b-breadcrumb>

        <div>
          <b-card no-body class="overflow-hidden courses_card" style="max-width: 700px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                </b-card-body>
              </b-col><hr>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                </b-card-body>
              </b-col><hr>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural lead-in to additional content.
                    This content is a little bit longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
  </b-container>
  </div>
  <Footer />
</div>
</template>

<script>
/* eslint-disable */
import Footer from './Footer'
import Header from './Header.vue'
import SubHeader from './SubHeader.vue'

export default {
 name : 'courses',
 components : {
  Footer,
  Header,
  SubHeader,
 },
}
</script>

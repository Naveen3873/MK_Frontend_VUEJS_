<template>
<div id="home">
    <div id="carousel">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption=""
              img-src="https://api.time.com/wp-content/uploads/2018/05/yale-police-lolade-siyonbol.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption=""
              img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg/1200px-Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              caption=""
              img-src="https://fs.utk.edu/wp-content/uploads/2021/01/Law-bldg-with-mottos.jpg"
            ></b-carousel-slide>
          </b-carousel>

   </div>
   <div id = "content">
     <b-container>
     <hr>
       <h3>LET’S JOIN AND START A HAPPY LIFE</h3><br>
       <p>Madurai Kamaraj University (MKU) is a state funded college in India situated in Madurai city in southern Tamil Nadu, India. It was set up in 1966 and has around 130,000 understudies in 18 schools including 72 offices, and 109 subsidiary universities.</p>
       <p>Madurai Kamaraj University was initiated on 6 February 1966, in view of the augmentation focal point of the University of Madras, at Madurai. In 1968 the establishment stone for another grounds was laid by Zakir Hussain, the President of India. The Directorate of Distance Education of the college was built up in 1971.</p>
     <hr>
     </b-container>
   </div>
   <b-container id="courses">
            <h3 class="text-center">Special courses</h3><br>
            <b-card-group deck>
              <b-card
                border-variant="primary"
                header="B.A. Political Science"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center"
              >
                <b-card-text>Political science is the scientific study of politics. It is a social science dealing with systems of governance and power, and the analysis of political activities, political thought, political behavior, and associated constitutions and laws.[1]
Modern political science can generally be divided into the three subdisciplines of comparative politics, international relations, and political theory.[2] Other notable subdisciplines are public policy and administration, domestic politics and government (often studied within comparative politics), political economy, and political methodology.[3] Furthermore, political science is related to, and draws upon, the fields of economics, law, sociology, history, philosophy, human geography, journalism, political anthropology, psychology, and social policy.</b-card-text>
              </b-card>
              <hr>
              <b-card
                border-variant="primary"
                header="B.A. Journalism and Mass Communication"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center"
              >
                <b-card-text>
                The Bachelor of Journalism (B.J.) degree is a degree awarded at some universities to students who have studied journalism in a three or four year undergraduate program.[1] In the United States, some schools that do not award the B.J. degree instead confer a Bachelor of Arts, Journalism (B.A.J.), Bachelor of Arts in Journalism and Mass Communication (B.A.J.M.C.)[2] or Bachelor of Science, Journalism (BSJ) that is often part of or in conjunction with a course of study in mass communication. Yet another epithetological version of the degree, conferred by The Henry W. Grady College of Journalism and Mass Communication at the University of Georgia, is the A.B.J. degree, the Latin equivalent of the B.J./B.A.J.
                </b-card-text>
              </b-card>
              <hr>
              <b-card
                border-variant="primary"
                header="B.Sc. Visual Communication"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center"
              >
                <b-card-text>Visual communication is the use of visual elements to convey ideas and information[1] which include but are not limited to, signs, typography, drawing, graphic design, illustration, industrial design, advertising, animation, and electronic resources.[2] Humans have used visual communication since prehistoric times.[3] Within modern culture, there are several types of characteristics when it comes to visual elements, they consist of objects, models, graphs, diagrams, maps and photographs.[1] Outside the different types of characteristics and elements , there are seven components of visual communication: Color, Shape, Tones, Texture, Figure-Ground, Balance, and Hierarchy.[1]
                </b-card-text>
              </b-card>
              <hr>
            </b-card-group>
   </b-container>

   <div id="about">
        <b-container class="bv-example-row">
          <b-row>
          <div id="card" class="col-md-4">
            <b-col>
                <div id="cardInside">
                  <b-card
                    title="Gallery"
                    img-src="data:image/jpeg;base64,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"
                    img-alt="gallery"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                  </b-card>
                </div>
             </b-col>
            </div>
            <div id="card" class="col-md-4">
              <b-col>
                 <div id="cardInside">
                  <b-card
                    title="Events"
                    img-src="https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/5f3153c82aa4a315798992b1_campus-event.jpeg"
                    img-alt="Events"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                  </b-card>
                </div>
              </b-col>
             </div>
            <div id="card" class="col-md-4">
              <b-col>
                 <div id="cardInside">
                  <b-card
                    title="Sports"
                    img-src="https://media.istockphoto.com/photos/silhouette-action-sport-picture-id1272269793?b=1&k=20&m=1272269793&s=170667a&w=0&h=xie_NP8GQ6LFpiA0WLqoVUF7y2wyebpCJDQ4wJwPy40="
                    img-alt="Sports"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
                  </b-card>
                </div>
              </b-col>
            </div>
          </b-row>
        </b-container>
   </div>
</div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

<style scoped>
div #carousel {
    overflow: hidden;
}
div .w-100 {
    width: 100% !important;
    align-items: center;

}
div #content {
   text-align: center;
   margin-top: 50px;
}
div #courses{
   margin-top: 70px;
}
#about {
 padding:40px;
}
div #card {
 box-shadow: 0 0 10px gray;
 margin-bottom:20px;
}
div #card:hover {
 cursor: pointer;
 box-shadow: 0 0 10px black;
}
div #cardInside {
 padding-top: 10px;
 padding:15px;
}
</style>

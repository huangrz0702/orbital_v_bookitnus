<template>
  <navigationBar />
  <div class="message-wrapper">
    <div class="message-content">
      <h1>Welcome to BOOKit@NUS</h1>
      <p>
        <br />
        Where you can book Every facility you want ON CAMPUS! <br />
        You can also communicate with your <br />
        fellow schoolmates and rate the facilities! <br />Login to explore full
        functionality!
      </p>

      <router-link class="link" :to="{ name: 'LoginPage' }"
        >LOGIN / REGISTER</router-link
      >
    </div>

    <div class="NUS-photo">
      <img alt="NUS" src="../assets/image/clavon-nus-university-town.webp" />
    </div>
  </div>

  <div class="gallery-wrapper">
    <h1>Photo Gallery</h1>
    <p>click on the picture to view the facilities available</p>

    <vueper-slides
      fade
      :touchable="false"
      autoplay
      fractions
      progress
      slide-content-outside="top"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
        :link="slide.link"
      />
    </vueper-slides>

    <div class="row">
      <div class="col">
        <div class="gallery">
          <a
            target="_blank"
            href="https://uci.nus.edu.sg/suu/wp-content/uploads/sites/5/2019/11/Facilities-at-Stephen-Riady-Centre.pdf"
          >
            <img
              src="@/assets/image/utown.jpeg"
              alt="utown"
              width="600"
              height="400"
          /></a>
          <div class="desc">Utown</div>
        </div>

        <div class="gallery">
          <a
            target="_blank"
            href="https://uci.nus.edu.sg/suu/facilities/about-suu-sports-facilities/university-sports-centre/"
          >
            <img
              src="@/assets/image/USC.jpeg"
              alt="USC"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">University Sports Center</div>
        </div>

        <div class="gallery">
          <a
            target="_blank"
            href="https://tembusu.nus.edu.sg/college-life/student-spaces"
          >
            <img
              src="@/assets/image/Tembusu.jpeg"
              alt="Tembusu"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">Tembusu College</div>
        </div>

        <div class="gallery">
          <a
            target="_blank"
            href="https://nus.edu.sg/osa/pioneerhouse/facilities"
          >
            <img
              src="@/assets/image/PGP.jpeg"
              alt="PGP"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">Prince Georges Park</div>
        </div>

        <div class="gallery">
          <a
            target="_blank"
            href="https://nus.edu.sg/osa/keviihall/facilities/guest-accomodation"
          >
            <img
              src="@/assets/image/KE.png"
              alt="KE"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">KE VII Hall</div>
        </div>
      </div>

      <div class="col">
        <div class="gallery">
          <a
            target="_blank"
            href="https://capt.nus.edu.sg/the-capt-experience/living-capt/living-capt-details/facilities-rooms"
          >
            <img
              src="@/assets/image/CAPT.jpeg"
              alt="CAPT"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">CAPT</div>
        </div>

        <div class="gallery">
          <a target="_blank" href="https://rc4.nus.edu.sg/rc4life/cognitio/">
            <img
              src="@/assets/image/RC4.jpeg"
              alt="RC4"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">RC4</div>
        </div>

        <div class="gallery">
          <a
            target="_blank"
            href="https://www.usp.nus.edu.sg/life-at-usp/facilitites-and-other-resources/"
          >
            <img
              src="@/assets/image/USP.jpeg"
              alt="USP"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">USP</div>
        </div>

        <div class="gallery">
          <a
            target="_blank"
            href="https://rvrc.nus.edu.sg/residential/facilities/"
          >
            <img
              src="@/assets/image/rvrc.jpeg"
              alt="RVRC"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">RVRC</div>
        </div>
      </div>

      <div class="col">
        <div class="gallery">
          <a
            target="_blank"
            href="https://nus.edu.sg/osa/raffleshall/facilities/amenities"
          >
            <img
              src="@/assets/image/RH.jpeg"
              alt="RH"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">Raffles Hall</div>
        </div>

        <div class="gallery">
          <a
            target="_blank"
            href="https://nus.edu.sg/osa/temasekhall/facilities/amenities"
          >
            <img
              src="@/assets/image/TH.jpeg"
              alt="TH"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">Temasek Hall</div>
        </div>

        <div class="gallery">
          <a
            target="_blank"
            href="https://nus.edu.sg/osa/eusoffhall/our-facilities/common-facilities"
          >
            <img
              src="@/assets/image/EH.jpeg"
              alt="EH"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">Eusoff Hall</div>
        </div>
        <div class="gallery">
          <a
            target="_blank"
            href="https://nus.edu.sg/osa/sheareshall/living/facilities"
          >
            <img
              src="@/assets/image/SH.jpeg"
              alt="SH"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">Sheares Hall</div>
        </div>

        <div class="gallery">
          <a
            target="_blank"
            href="https://nus.edu.sg/osa/kentridgehall/facilities/amenities"
          >
            <img
              src="@/assets/image/KR.jpeg"
              alt="KR"
              width="300"
              height="200"
            />
          </a>
          <div class="desc">Kent Ridge Hall</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigationBar from "../components/Navigation.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "HomePage",
  Components: { navigationBar, VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      {
        title: "Sheares Hall",
        image: require("@/assets/image/SH4.jpeg"),
        link: "https://nus.edu.sg/osa/sheareshall/living/facilities",
      },
      {
        title: "Ridge View Residential college",
        image: require("@/assets/image/RVRC2.jpeg"),
        link: "https://rvrc.nus.edu.sg/residential/facilities/",
      },
      {
        title: "Raffles Hall",
        image: require("@/assets/image/RH2.jpeg"),
        link: "https://nus.edu.sg/osa/raffleshall/facilities/amenities",
      },
      {
        title: "Tembusu Residential college",
        image: require("@/assets/image/Tembusu.jpeg"),
        link: "https://tembusu.nus.edu.sg/college-life/student-spaces",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.message-wrapper {
  color: #271e05;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #f0e6cb;
  @media (min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }

  .message-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }

    p {
      position: relative;
      left: -14px;
      font-size: 14px;
    }

    .link {
      display: inline-flex;
      position: relative;
      left: -120px;
      margin-top: 32px;
      padding-bottom: 4px;
      border-bottom: 1px solid;
      &:hover {
        color: #135c97ae;
      }
    }

    .link-admin {
      font-size: 15px;
      display: inline-flex;
      position: relative;
      left: -50px;
      margin-top: 32px;
      padding-bottom: 4px;
      &:hover {
        color: #135c97ae;
      }
    }
  }
}

.NUS-photo {
  order: 1;
  flex: 3;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 700px) {
    order: 2;
  }
  @media (min-width: 800px) {
    flex: 4;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.gallery-wrapper {
  background-color: #f1f3f4;

  h1,
  p {
    text-align: center;
    position: relative;
    font-family: "Times New Roman", Times, serif;
    color: #271e05;
  }

  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  .row {
    .col {
      float: left;
      width: 33.33%;
      padding: 5px;

      .gallery {
        margin: 5px;
        border: 1px solid #ccc;
        float: left;
        width: 400px;
      }

      .gallery:hover {
        border: 1px solid #777;
      }

      .gallery img {
        width: 100%;
        height: auto;
      }

      .desc {
        padding: 15px;
        text-align: center;
      }
    }
  }
}
</style>
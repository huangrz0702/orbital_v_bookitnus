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
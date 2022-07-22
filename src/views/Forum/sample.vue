<template>
<navigationBar />

<BlogContent :blog="blog" v-for="(blog, index) in sampleBlogContent" :key="index" />

</template>

<script>
import navigationBar from '../../components/Navigation.vue';
import BlogContent from "../../components/BlogContent.vue";
export default {
  name: "sampleBlogPage",

  Components: {
    BlogContent,
    navigationBar
  },
  data() {
      return {
          sampleBlogContent: [
              { title: "Raffles hall gym is awesome!", email: "rafflesboy@gmail.com", cover: "1", date: "June 6 2022", venue:"Raffles Hall",
                    content: "Raffles Hall gym"},
              { title: "Loving RVRC's environment",  email: "rvrcgirl@gmail.com", cover: "2", date: "June 14 2022", venue: "RVRC",
                    content: "RVRC"},
              { title: "Sheares Hall function room review", email: "shearesboy@gmail.com", cover: "3", date: "June 20 2022", venue: "Sheares Hall",
                    content: "Sheares Hall function room"},
              { title: "RC4 music room", email: "rc4bird@gmail.com", cover: "4", date: "June 25 2022", venue: "RC4",
                    content:"RC4 music room" },
          ]
      };
  },
};
</script>

<style lang="scss" scoped>
.message-wrapper {
  color: #271e05;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff5d1;
  @media (min-width: 600px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: column;
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

    h4 {
      position: relative;
      left: -160px;
      margin-bottom: 4px;
    }

    p {
      border: #135c97ae;
      border-style: double;

      position: relative;
      left: 1px;
      font-size: 14px;
    }

    h3 {
      color: #3a393781;
      position: relative;
      left: -50px;
      font-size: 12px;
      text-align: left;
    }

    .link {
      display: inline-flex;
      position: relative;
      font-size: 12px;
      left: -200px;
      margin-top: 10px;
      padding-bottom: 2px;
      border-bottom: 1px solid;
      &:hover {
        color: #135c97ae;
      }
    }
  }
}

.photo {
  order: 1;
  flex: 2;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 700px) {
    order: 2;
  }
  @media (min-width: 800px) {
    flex: 4;
  }

  img {
    height: 400px;
    width: 450px;
    position: relative;
    left: 500px;
    display: float;
    object-fit: cover;
  }
}
</style>
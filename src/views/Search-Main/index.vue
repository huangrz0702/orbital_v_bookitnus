<template>
  <div class="container">
    <div class="left">
      <Filters
        :filterPosts="filterPosts"
        :search="search"
        :filteredPosts="filteredPosts"
      />
      <Filters2 :filterPosts2="filterPosts2" :filteredPosts2="filteredPosts2" />
    </div>
    <div class="facmain">
      <div class="fac-card-wrap">
        <div class="fac-card-container">
          <h2>All Facilities</h2>
          <div class="fac-cards">
            <FacCard :post="post" v-for="post in posts" :key="post.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacCard from "../../components/FacCard.vue";
import Filters from "../../components/Filters.vue";
import Filters2 from "../../components/Filters2.vue";

export default {
  name: "SearchMainPage",
  Component: {
    FacCard,
    Filters,
    Filters2,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          facName: "Raffles Hall",
          blogCover: "1",
          facType: "indoor sports",
          facCharge: "free of charge",
        },
        {
          id: 2,
          facName: "RVRC",
          blogCover: "2",
          facType: "outdoor sports",
          facCharge: "paid for use",
        },
        {
          id: 3,
          facName: "RVRC",
          blogCover: "2",
          facType: "outdoor sports",
          facCharge: "free of charge",
        },
        {
          id: 4,
          facName: "Sheares Hall",
          blogCover: "3",
          facType: "meeting room",
          facCharge: "free of charge",
        },
        {
          id: 5,
          facName: "Tembusu RC",
          blogCover: "4",
          facType: "function room",
          facCharge: "free of charge",
        },
      ],
      str: "",
      type: "",
    };
  },
  methods: {
    filterPosts(catName) {
      this.resetPosts();
      if (catName !== "All") {
        this.posts = this.posts.filter((post) => {
          return post.facType === catName;
        });
      }
    },
    filterPosts2(catName) {
      this.posts = this.posts;
      this.posts = this.posts.filter((post) => {
        return post.facCharge === catName;
      });
    },
    search(term) {
      this.resetPosts();
      this.posts = this.posts.filter((post) => {
        return post.facName.toLowerCase().includes(term.toLowerCase());
      });
    },

    resetPosts() {
      this.posts = [
        {
          id: 1,
          facName: "Raffles Hall",
          blogCover: "1",
          facType: "indoor sports",
          facCharge: "free of charge",
        },
        {
          id: 2,
          facName: "RVRC",
          blogCover: "2",
          facType: "outdoor sports",
          facCharge: "paid for use",
        },
        {
          id: 3,
          facName: "RVRC",
          blogCover: "2",
          facType: "outdoor sports",
          facCharge: "free of charge",
        },
        {
          id: 4,
          facName: "Sheares Hall",
          blogCover: "3",
          facType: "meeting room",
          facCharge: "free of charge",
        },
        {
          id: 5,
          facName: "Tembusu RC",
          blogCover: "4",
          facType: "function room",
          facCharge: "free of charge",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10vh;
  height: 100%;
  width: 100%;
  display: flex;
  background-size: 100% 100%;
  background-image: url("../../assets/image/about.jpeg");
}

.left {
  padding-right: 30px;
  position: relative;
  padding: 80px 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}

.form {
  padding: 10vw;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  height: auto;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}

h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 3vh;
  font-weight: bold;
}

select {
  background-color: rgba(237, 209, 96, 0.669);
  color: black;
  padding: 10px;
  width: 200px;
  border: none;
  font-size: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

.facmain {
  position: relative;
  padding: 0px 18px;
}

.fac-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  @media (min-width: 500px) {
    padding: 100px 40px;
  }
  .fac-card-container {
    .fac-cards {
      display: grid;
      gap: 32px;
      grid-template-columns: 1fr;
      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
}
</style>
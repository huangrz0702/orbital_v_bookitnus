<template>
 <navigationBar />
<div class="blogmain">

    <div class="blog-card-wrap">
        <div class="container">
            <h3>Recommended Blogs</h3>
            <div class="blog-cards">
                <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
            </div>
            <router-link class="link" to = '/sampleBlogPage'> View All Recommended Blogs</router-link>
            <br>
            <br>
            <router-link class="link" to="/blogPreviews">Read More Posts</router-link>
        </div>
    </div>
</div>


</template>

<script>
import navigationBar from '../../components/Navigation.vue';
import BlogCard from "../../components/BlogCard.vue";
export default {
    name: 'BlogMainPage',
    Component: {
        BlogCard,
        navigationBar
    },
    data() {
        return {
            sampleBlogCards: [
                { blogTitle: "Raffles hall gym is awesome!", blogCover: "1", blogDate: "June 6 2022"},
                { blogTitle: "Loving RVRC's environment", blogCover: "2", blogDate: "June 14 2022" },
                { blogTitle: "Sheares Hall function room review", blogCover: "3", blogDate: "June 20 2022" },
                { blogTitle: "RC4 music room", blogCover: "4", blogDate: "June 25 2022" },
            ]
        };
    },
}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }
  .container {
    .blog-cards {
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
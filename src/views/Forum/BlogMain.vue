<template>
<div class="blogmain">

    <div class="blog-card-wrap">
        <div class="container">
            <h3>View Blogs & Reviews</h3>
            <div class="blog-cards">
                <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
            </div>
        </div>
    </div>
</div>


</template>

<script>
import BlogCard from "../../components/BlogCard.vue";
export default {
    name: "BlogMainPage",
    Component: {
        BlogCard
    },
    data() {
        return {
            sampleBlogCards: [
                { blogTitle: "Blog Card #1", blogCover: "1", blogDate: "June 4 2022" },
                { blogTitle: "Blog Card #1", blogCover: "2", blogDate: "June 4 2022" },
                { blogTitle: "Blog Card #1", blogCover: "3", blogDate: "June 4 2022" },
                { blogTitle: "Blog Card #1", blogCover: "4", blogDate: "June 4 2022" },
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
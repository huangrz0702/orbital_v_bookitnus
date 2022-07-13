<template>
  <navigationBar />
  <div class="container">
    <section class="form">
      <h2>ALL POSTS</h2>
      <table class="table" style="text-align: left">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="blog in blogs" :key="blog">
            <td>
              {{ blog.title }}
            <router-link :to="{ name: 'indivBlogPage', params: { id: blog.id } }">Read More</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
//import { ref } from "vue";
import { db } from "../../firebase/firebaseinit";
import navigationBar from '../../components/Navigation.vue';
//import { computed } from "vue";
import {
  onSnapshot,
  collection,
  query,
  where,
  //doc,
  //deleteDoc,
  //updateDoc,
} from "firebase/firestore";

export default {
  Component: {
    navigationBar
  },

  data() {
    return {
      currentUser: localStorage.getItem("currentuser"),
      blogs: [],
      blogId: [],
    };
  },

  methods: {
    viewDetails (blog) {
        const index = this.blogs.indexOf(blog)
        const q = query(
        collection(db, "blogDetails"),
        where(blog.id == index));
        return {q}
    }
  },

  created() {
    console.log(this.currentUser);
    const q = query(
      collection(db, "blogDetails"),
    );
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.blogs.push(doc.data());
        this.blogId.push(doc.id);
      });
      console.log(
        "blogs",
        querySnapshot.docs.map((doc) => doc.id),
        querySnapshot.docs.map((doc) => doc.data())
      );
    });

  },
};
</script>

<style scoped>
.container {
  padding: 10vh;
  height: 60%;
  width: 100%;
  display: flex;
  background-size: 100% 100%;
  background-image: url("../../assets/image/about.jpeg");
}

table,
th,
td {
  border: 1px solid #ddd;
  border-collapse: collapse;
}

th {
  height: 70px;
  background-color: rgb(121, 145, 223);
  color: white;
}

td {
  height: 35px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: rgb(197, 162, 65);
}

.btn {
  width: 50%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
  color: black(237, 209, 96, 0.669);
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
</style>

<template>
  <navigationBar />
  <div class="container">
    <section class="form">

      <table class="table" style="text-align: left">
        <thead>
          <tr>
            <th>ALL POSTS</th>

          </tr>
        </thead>

        <tbody>
          <tr v-for="blog in blogs" :key="blog">
            <td>
                <div class = "title">
                   Title:  {{ blog.title }}                  
                </div>
                <div class = "body">
                    <div class = "date">
                        <p>Posted on: </p> {{ blog.date }}                    
                    </div>
                    <div class = "venue">
                        <p>Place visited:</p>{{ blog.venue }}                    
                    </div>
                    <div class = "content">
                        <p>Content :</p> 
                        {{ blog.content }}          
                    </div>                    
                </div>
                <button @click = "deleteBlog(blog)"> Delete Blog</button>

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
  doc,
  deleteDoc,
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

    deleteBlog(blog) {
      const index = this.blogs.indexOf(blog);
      console.log(index);
      console.log(this.blogId[index]);
      if (confirm("Are you sure? Deletion is irreversible.")) {
        deleteDoc(doc(db, "blogDetails", this.blogId[index]));
        alert("Delete successfully!");
        this.$router.push({ name: "myBlogs" });
      } else {
        return;
      }
    },
  },

  created() {
    console.log(this.currentUser);
    const q = query(
      collection(db, "blogDetails"),
      where("email", "==", this.currentUser.slice(1, -1))
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
  height: 80%;
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
  height: 60px;
  background-color: rgb(121, 145, 223);
  color: white;
}

td {
  height: 300px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: rgb(211, 184, 126);
}

.form {
  padding: 10vw;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  text-align: justify;
  height: auto;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}

.title {
    margin-top: -20px;
    font-size: 25px;
    color: rgb(79, 107, 174);
    font-family: "Times New Roman", Times, serif;
    white-space: nowrap;
    line-height: 2.0;
    

}
.venue, .date {

    font-size: 15px;
    color: rgb(83, 59, 41);
}
.content {

    font-size: 18px;
    color: rgb(83, 59, 41);

}

p {
    line-height: 2.0;
    font-size: 15px;
    color:black;
    font-family: "Lucida Console", "Courier New", monospace;
    
}

button {
    position:relative;
    left: 800px;
}

</style>

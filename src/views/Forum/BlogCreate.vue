<template>
  <navigationBar />
  <div class="blog" >
    <div class="page">
      <div class="container-header">
        <p class="header">Create A Blog</p>
      </div>

      <div class="edit">
        <div class="inputbox">
          <div class="inputbox">
            <label>Blog Title: </label>
            <input
              type="text"
              placeholder="e.g. Basketball Experience"
              required
              v-model="title"
            />
          </div>
          <div class="inputbox">
            <label>Place: </label>
            <input placeholder="e.g. PGP" required v-model="venue" />
          </div>
          <div class="inputbox">
            <label>Date: </label>
            <input placeholder="e.g. June 1st" required v-model="date" />
          </div>
        </div>
      </div>

      <div class="textcontainer">
        <textarea required v-model="content" />
      </div>

      <div class="blog-actions">
        <button class="btn" @click = "publish">Publish Blog</button>
      </div>
    </div>
  </div>
</template>

<script>
import navigationBar from '../../components/Navigation.vue';
//import {auth} from '@/firebase/firebaseinit'
//import { ref, uploadBytes } from "firebase/storage";
import { db } from "../../firebase/firebaseinit";
import { collection, setDoc, doc} from "firebase/firestore";

export default {
  Component: {
    navigationBar
  },

  data() {
    return {
      email:localStorage.getItem("currentuser").slice(1, -1),
      title: '',
      venue: '',
      date: '',
      content: '',
    };
  },

  methods: {
    async publish() {
      try {
        const data = {
          email: localStorage.getItem("currentuser").slice(1, -1),
          title: this.title,
          venue: this.venue,
          date: this.date,
          content: this.content,
        }
        const newBlogRef = doc(collection(db, "blogDetails"))
        await setDoc(newBlogRef, data);
        console.log(newBlogRef.id);
        alert("Publish successfully!");

        this.$router.push({ name: "indivBlogPage", params: { id: newBlogRef.id } });

      } catch (error) {
        console.log(error);
        switch (error.code) {
          default:
            alert("something went wrong");
            this.$router.push({ name: "HomePage" });
        }
      } 
    },
  }
}


</script>


<style lang="scss" scoped>
.header {
  float: left;
  color: black;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 25px;
}
.container-header {
  background-color: rgba(237, 209, 96, 0.669);
  padding: 2vh 10vw 2vh 10vw;
  display: flex;
}
.page {
  background: url(../../assets/image/profile.png);
  background-attachment: fixed;
  background-size: cover;
  padding-bottom: 50px;
  font-size: 15px;
}
.edit {
  display: flex;
  text-align: center;
  justify-content: center;
}

.inputbox {
  margin: 10px;
}
.inputbox label {
  text-align: justify;
  display: inline-block;
  width: 200px;
  vertical-align: middle;
}

input {
  border: 0;
  background-color: white;
  width: 250px;
  height: 35px;
  font-size: 13px;
  padding: 5px;
}

.textcontainer {
  textarea {
    width: 80%;
    margin: 1% 10%;
    height: 50vh;
    border-style: solid;
    border-width: 2px;
    border-color: black;
    padding-bottom: 40px;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
}

.btn {
  width: 50%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
  color: black(237, 209, 96, 0.669);
}

.blog-actions {
  margin-top: 30px;
  text-align: center;
  display: flex;
}

button {
  margin-left: 25%;
}

.blog-preview {
  a {
    margin-left: 47%;
  }
}
</style>
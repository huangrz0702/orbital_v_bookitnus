<template>
  <form class="blog" @submit.prevent="publish">
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
              v-model="blog.title"
            />
          </div>
          <div class="inputbox">
            <label>Place: </label>
            <input placeholder="e.g. PGP" required v-model="blog.venue" />
          </div>
          <div class="inputbox">
            <label>Date: </label>
            <input placeholder="e.g. June 1st" required v-model="blog.date" />
          </div>
          <div class="inputbox">
            <label for="blog-photo">Upload Cover Photo</label>
            <input
              type="file"
              ref="blogPhoto"
              id="blog-photo"
              @change="fileChange"
              accept=".png, .jpg, ,jpeg"
            />
          </div>
        </div>
      </div>

      <div class="textcontainer">
        <textarea required v-model="blog.content" />
      </div>

      <div class="blog-preview">
        <router-link class="router-button" to="#">Post Preview</router-link>
      </div>

      <div class="blog-actions">
        <button class="btn" type="submit" @click = "publish">Publish Blog</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { auth, db } from "../../firebase/firebaseinit";
// import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export default {
  setup() {
    const blog = ref({});

    return {
      blog,
    };
  },

  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
    },

    async publish() {
      try {
        await addDoc(collection(db, "blogDetails"), {
          email: auth.currentUser.email,
          title: this.blog.title,
          venue: this.blog.venue,
          date: this.blog.date,
          content: this.blog.content,
        }).then(() => {
          alert("Publish successfully!");
        });
      } catch (error) {
        console.log(error);
        switch (error.code) {
          default:
            alert("Please log in first!");
            this.$router.push({ name: "LoginPage" });
        }
        return;
      }
      this.$router.push({ name: "HomePage" });
    },
  },
};
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
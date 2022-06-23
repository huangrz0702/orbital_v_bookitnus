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
          <div class="inputbox">
            <img :src="imageUrl" height="150">
            <label for="blog-photo" @click = "onPickFile">Upload Cover Photo</label>
            <input
              type="file"
              ref="blogPhoto"
              id="blog-photo"
              @change="onFilepicked"
              accept=".png, .jpg, ,jpeg"
            />
          </div>
        </div>
      </div>

      <div class="textcontainer">
        <textarea required v-model="content" />
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

export default {
  data() {
    return {
      title: '',
      venue: '',
      date: '',
      content: '',
      imageUrl: '',
    };
  },
  computed : {
    formIsValid () {
      return this.title !== '' &&
      this.venue !== '' &&
      this.imageUrl !== '' &&
      this.date !== ''&&
      this.content !== ''
    },
  },

  methods: {
    onPickFile() {
      this.$refs.blogPhoto.click();
    },

    onFilePicked(event) {
      const files = event.target.files;
      let fileName = files[0].name;
      if (fileName.lastIndexOf(".") <= 0) {
        return alert('Please upload a valid image file');
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0];
    },
    

    publish() {
      if (!this.formIsValid) {
        return
      }
      const blog = {
        title: this.title,
        venue: this.venue,
        imageUrl: this.imageUrl,
        content: this.content,
        date: this.date
      }
      this.$store.dispatch('createBlog', blog)
      this.$router.push('/blogs')
      alert("success!")
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
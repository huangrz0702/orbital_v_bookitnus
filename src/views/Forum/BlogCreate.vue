<template>
  <div class="page">
    <div class="container-header">
      <p class="header">Create A Blog</p>
    </div>

    <div class="edit">
      <div class="inputbox">
        <div class="inputbox">
          <label>Blog Title: </label>
          <input type="text" placeholder="e.g. Basketball Experience" />
        </div>
        <div class="inputbox">
          <label>Place: </label>
          <input placeholder="e.g. PGP"  />
        </div>
        <div class="inputbox">
          <label>Date: </label>
          <input placeholder="e.g. June 1st" />
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

    <div class="blog-actions">
      <button @click="uploadBlog">Publish Blog</button>
      <router-link class="router-button" to="#">Post Preview</router-link>
    </div>
  

    <div class="textcontainer">
      <QuillEditor
        ref="qeditor"
        class="editor"
        theme="snow"
        toolbar="full"
      />
    </div>
   </div>

</template>


<style scoped>
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
textarea {
  border: 0;
  background-color: white;
  width: 250px;
  font-size: 13px;
  padding: 5px;
}
.textcontainer {
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

.btn {
  width:50%;
  padding:10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
  color: black(237, 209, 96, 0.669);
}

.blog-actions {
    margin-top: 30px;
    text-align: center;
    display: flex;
    
    button {
      margin-right: 16px;
    }
    
}

</style>
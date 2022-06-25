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
         <div >
           <button @click="click1">choose a photo</button>
           <input type="file" ref="input1"
            style="display: none"
            @change="previewImage" accept="image/*" >                
         </div>
 
       <div v-if="imageData!=null">                     
          <img class="preview" height="268" width="356" :src="img1">
       <br>
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
import {auth, storage} from '@/firebase/firebaseinit'
import { ref, uploadBytes } from "firebase/storage";
import { db } from "../../firebase/firebaseinit";
import { collection, addDoc } from "firebase/firestore";

export default {

  data() {
    return {
      email:'',
      title: '',
      venue: '',
      date: '',
      content: '',
      img1: '',
      imageData: null
    };
  },

  methods: {

  click1() {
    this.$refs.input1.click()   
  },
  previewImage(event) {
    this.uploadValue=0;
    this.img1=null;
    this.imageData = event.target.files[0];
    this.onUpload()
  },
  onUpload(){
    addDoc(collection(db, "blogDetails"), {
      email: auth.currentUser.email,
      title: this.title,
      venue: this.venue,
      date: this.date,
      content: this.content,
      picture: "blogs/"+ this.imageData
    })
    const imgRef = ref(
      storage,
      "blogs/" + "/" + this.imageData
    );
    uploadBytes(imgRef, this.file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      console.log(snapshot);
    });
    this.img1=null;
    const storageRef=storageRef(`${this.imageData.name}`).put(this.imageData);
    storageRef.on(`state_changed`,snapshot=>{
    this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
    ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            this.img1 =url;
            console.log(this.img1)
          });
        }      
      );
      alert("Publish successfully!");
    }
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
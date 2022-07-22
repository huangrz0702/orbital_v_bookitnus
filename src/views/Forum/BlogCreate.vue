<template>
  <navigationBar />
  <div class="blog" >
    <div class="page">

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
            <label>Venue</label>
            <select required v-model="venue">
              <option value="null" selected disabled>Please select a venue</option>
              <option value="Raffles Hall">Raffles Hall</option>
              <option value="RVRC">RVRC</option>
              <option value="Sheares Hall">Sheares Hall</option>
              <option value="Tembusu RC">Tembusu RC</option>
              <option value="RC4">RC4</option>
              <option value="USC">USC</option>
              <option value="PGP">PGP</option>
              <option value="UT">Utown</option>
            </select>
          </div>
          <div class="inputbox">
            <label>Date: </label>
            <input type = "date" placeholder="e.g. June 1st" required v-model="date" />
          </div>
        </div>
      </div>

    <div class="editcontainer">
      <QuillEditor
        ref="qeditor"
        class="editor"
        theme="snow"
        toolbar=""
        @ready="onEditorReady($event)"
      />
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

  computed: {
    qeditor() {
      return this.$refs.qeditor.getQuill();
    },
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
    onEditorReady() {
      console.log(this.qeditor);
      // this.qeditor.setText("Please enter enter your blogs here...")
      this.qeditor.root.dataset.placeholder =
        "Please enter your thoughts...";
    },

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
  color: rgb(128, 101, 66);
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 25px;
}
.container-header {
  background-color: antiquewhite;
  padding: 2vh 10vw 2vh 10vw;
  display: flex;
}
.page {
  background: url(../../assets/image//NUS3.jpeg);
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
  text-align: left;
  display: inline-block;
  width: 100px;
  vertical-align: left;
  font-weight:900;
  color: antiquewhite;

}

input {
  border: 0;
  background-color: antiquewhite;
  width: 250px;
  height: 35px;
  font-size: 13px;
  padding: 5px;
}

select {
  border: 10px;
  background-color: antiquewhite;
  width: 250px;
  height: 35px;
  font-size: 13px;
  padding: 5px;

}

.editcontainer {
  width: 60%;
  margin: 1% 10%;
  height: 50vh;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  padding-bottom: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: antiquewhite;
  position: relative;
  left: 180px;
}

.btn {
  width: 50%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
  color: black(237, 209, 96, 0.669);
  background-color: antiquewhite;
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
<template>
  <navigationBar />
  <div class="container">
    <section class="form">

      <table class="table" style="text-align: left">
        <thead>
          <tr>
            <th>Your Post</th>

          </tr>
        </thead>

        <tbody>
            <td>
                <div class = "title">
                   Title:  {{ blog.title }}                  
                </div>
                <div class = "body">
                    <div class = "auth">
                        <p>By user: {{blog.email}}</p>
                    </div>
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

            </td>

        </tbody>
      </table>
    </section>
  </div>
</template>

<script>

import navigationBar from '../../components/Navigation.vue';
import { ref as Ref } from "vue";
import { db } from "../../firebase/firebaseinit";
import { doc, getDoc } from "firebase/firestore";

export default {
  Component: {
    navigationBar
  },
  props: ["id"],
  
  setup(props) {
    const blog = Ref('')
    const load = async () => {
      try {
        const res = await getDoc(doc(db, "blogDetails", props.id));
        blog.value = res.data();
        // console.log(res.data().coverPhoto)
      } catch (err) {
        alert(err.message);
      }
    };

    load();
    return {blog, load}
  }


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

tr{
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
.auth, .venue, .date {

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


</style>

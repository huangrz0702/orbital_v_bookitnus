<template>
  <div class="container">
    <section class="form">
      <h2>POSTS</h2>
      <table class="table" style="text-align: center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Content</th>
            <th>photo</th>
          </tr>
        </thead>

        <tbody>
            <td>
              {{ blog.title }}
            </td>

            <td>
              {{ blog.date  }}
            </td>

            <td>
              {{ blog.venue }}
            </td>

            <td>
              {{ blog.content }}
            </td>

            <td>
              {{ blog.picture }}
            </td>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import getPost from "@/views/Forum/getPost";

import { useRoute} from "vue-router";
export default {
  props: ["id"],
  setup() {
    const route = useRoute();
    const { error, blog, load } = getPost(route.params.id);
    load();
    return { error, blog};
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

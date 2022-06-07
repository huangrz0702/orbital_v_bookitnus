<template>
  <h2>Filters</h2>
  <br /><br />

  <input id="search" placeholder="Search here" v-model="term" />
  <br />
  <input class="btn" type="submit" @click="search(term)" />
  <p v-for="filter in filters" :key="filter" @click="() => filterPosts(filter)">
    {{ filter }}
  </p>
</template>

<script>
const filters = [
  "All",
  "indoor sports",
  "outdoor sports",
  "meeting room",
  "function room",
];
export default {
  props: ["filterPosts", "search", "filteredPosts"],
  data() {
    return {
      filters,
      term: "",
    };
  },
};
</script>

<style scoped>
input {
  background-color: whitesmoke;
  color: black;
  padding: 10px;
  width: 200px;
  border: none;
  font-size: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

.btn {
  background-color: rgba(237, 209, 96, 0.669);
  width: 50%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
  color: black(237, 209, 96, 0.669);
}

p {
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
}
</style>
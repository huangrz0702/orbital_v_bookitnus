<template>
  <br>
  <hr />
  <p v-for="filter in filters" :key="filter" @click="() => filterPosts2(filter)">
    {{ filter }}
  </p>
</template>

<script>
const filters = [
  "free of charge",
  "paid for use"
];
export default {
  props: ["filterPosts2", "filteredPosts2"],
  data() {
    return {
      filters,
      term: "",
    };
  },
};
</script>


<style scoped>
p {
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
}
</style>
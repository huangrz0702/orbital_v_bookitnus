<template>
  <br />
  <hr />
  <p
    v-for="filter in filters"
    :key="filter"
    @click="() => filterPosts2(filter)"
  >
    {{ filter }}
  </p>
</template>

<script>
const filters = ["free of charge", "paid for use"];
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


<style lang='scss' scoped>
p {
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.5s ease-in all;
  &:hover {
    color: rgba(153, 126, 18, 0.669);
  }
}
</style>
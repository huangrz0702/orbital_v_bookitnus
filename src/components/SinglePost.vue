<template>
  <div class="post m-4 shadow-md p-3">
    <router-link :to="{ name: 'indivBlogPage', params: { id: post.id } }">
      <h3 class="text-3xl font-black my-2">{{ post.title }}</h3>
    </router-link>
    <p class=" my-3 mx-1 text-lg ">{{ snippet }}</p>
    </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.blog.body.substring(0, 130) + "...";
    });
    return { snippet };
  },
};
</script>

<style></style>
<template>
  <AboutPage/>
</template>

<script>
import AboutPage from './views/about.vue'

export default {
  name: 'App',
  components: {
    AboutPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

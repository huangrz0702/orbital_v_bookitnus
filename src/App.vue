<template>
  <AboutPage/>
  <LayoutPage/>


</template>

<script>
import AboutPage from './views/About/about.vue'
import LayoutPage from './layout/index.vue'
//import SearchMainPage from './views/Search-Main/index.vue'

export default {
  name: 'App',
  components: {
    AboutPage, LayoutPage
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

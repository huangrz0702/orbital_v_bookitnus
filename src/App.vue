
<template>
  <div class="app-wrapper">
    <div class="app">
      <navigationBar />
      <router-view />
      <Footer />

    </div>
  </div>
</template>

<script>
//import AboutPage from './views/AboutPage/About.vue'
//import LayoutPage from './layout/index.vue'
import navigationBar from './components/Navigation.vue'
import Footer from './components/Footer.vue'
//import SearchMainPage from './views/Search-Main/index.vue'

export default {
  name: 'App',
  components: {
    //AboutPage,
    //LayoutPage,
    navigationBar,
    Footer,

}
}
</script>

<style lang = "scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
</style>


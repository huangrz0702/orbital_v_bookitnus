
<template>
  <div class="app-wrapper">
    <div class="app">
      <loginPage/>
    </div>
  </div>
</template>

<script>
//import HomePage from './views/Home.vue'
//import LayoutPage from './layout/index.vue'
//import navigationBar from './components/Navigation.vue'
//import Footer from './components/Footer.vue'
//import SearchMainPage from './views/Search-Main/index.vue'
import LoginPage from './views/LoginPage.vue'
//import RegisterPage from './views/RegisterPage.vue'


export default {
  name: 'App',
  components: {
    //LayoutPage,
    //navigationBar,
    //Footer,
    //HomePage,
    LoginPage,
    //RegisterPage,
    
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


<template>
  <div class="home">
     <WelcomeScreen:post="welcomeScreen" />
  </div>
</template>

<script>
import WelcomeScreen from '../components/WelcomeScreen.vue';
export default {
  name: "HomePage",
  Components: {WelcomeScreen},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome to Bookit@NUS",
        openMessage:
          "where you can book everything you want with ease!",
        photo: "NUS",
      },
    };
  },
};
</script>
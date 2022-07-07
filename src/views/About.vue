<template>
  <navigationBar />
  <div class="container" style="text-align: center">
    <section class="form">
      <h2>
        Hello everyone, here is something about us -
        <span style="color: olivedrab">BOOK</span
        ><span style="color: purple">it@</span
        ><span style="color: olivedrab">NUS!</span>
      </h2>
      <p style="padding-left: 16px">
        Let me introduce to you BOOKit@NUS, an all-in-one web application where
        you can enjoy all the top-notch facilities in NUS, without the hustle
        and bustle of emailing the venues one-by-one can wait for few days to
        get a reply.<br /><br />

        Here, you can just perform a few clicks and you will find all the
        facilities you want to use: be it function room or tennis court, indoor
        or outdoor, free or charged. You can almost book everything with ease
        that you are eligible to book.<br /><br />

        You will be able to see your active bookings and cancel anytime. You
        will also be able to view your history bookings and book your favourite
        facilities once more. If you have any queries about the booking, you can
        contact the authorities which we will provide contact details as
        well.<br /><br />

        Last but not least, you will be able to review the facilties and share
        your opnions in the forum as well. You can even make friends with other
        people of the same interest!<br /><br />

        Now, please do not hesitate and start booking venues. Enjoy!
      </p>
    </section>
  </div>
</template>




<script>
import navigationBar from '../components/Navigation.vue'

export default {
  name: "AboutPage",
  Components: { navigationBar },
};
</script>

<style scoped>
.container {
  padding: 10vh;
  height: 60%;
  display: flex;
  background-size: 100% 100%;
  background-image: url("../assets/image/about.jpeg");
}

h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 5vh;
  font-weight: bold;
}

p {
  font-size: 15px;
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

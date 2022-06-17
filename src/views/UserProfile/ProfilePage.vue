<template>
  <div class="container-profile">
    <h1>Greetings, User {{ name.split("@")[0].substring(1) }} !</h1>
    <h2>My account</h2>
    <p>View and edit your personal info below.</p>

    <form class="signout" @submit.prevent="signout">
      <input class="btn" type="submit" value="Sign Out" />
    </form>
    <br />
    <hr />

    <form class="changepassword" @submit.prevent="changepassword">
      <h2>Change your password</h2>
      <p>Send an email to change your password.</p>

      <input
        class="btn"
        id="changepassword"
        type="submit"
        value="Change Password"
      />
    </form>
    <br />
    <hr />

    <form class="changename" @submit.prevent="changename">
      <h2>Display Name</h2>
      <p>Change your display name here.</p>
      <div class="input">
        <input
          type="displayname"
          placeholder="Please Enter Your New Display name"
          v-model="profile.name"
          required
        />
      </div>
      <input class="btn" id="changename" type="submit" value="Submit" />
    </form>

    <br />
    <hr />
    <form class="info" @submit.prevent="checkbooking">
      <div class="input">
        <input
          class="btn"
          id="bookHist"
          type="submit"
          value="My Booking History"
        />
        <br />
        <input
          class="btn"
          id="forumPosts"
          type="submit"
          value="My Forum Posts"
        />
      </div>
    </form>

    <br />
    <hr />
  </div>
</template>

<script>
import { ref } from "vue";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseinit.js";
import "firebase/compat/auth";

export default {
  setup() {
    const profile = ref({});
    return {
      profile,
    };
  },

  props: {
    name: {
      type: String,
      default: localStorage.getItem("currentuser"),
    },
  },
  methods: {
    async changepassword() {
      try {
        await sendPasswordResetEmail(auth, auth.currentUser.email).then(() => {
          alert("Password Reset Email Sent!");
        });
      } catch (error) {
        switch (error.code) {
          default:
            alert("Something went wrong");
        }
        return;
      }
    },
    async signout() {
      try {
        await signOut(auth);
        localStorage.setItem("currentuser", "");
        alert("You have signed out!");
        this.$router.push({ name: "LoginPage" });
      } catch (error) {
        console.log(error);
        switch (error.code) {
          default:
            alert("Something went wrong");
        }
        return;
      }
    },
    async changename() {
      try {
        await localStorage.setItem("currentuser", " " + this.profile.name);
        alert("You have successfully changed your name!");
      } catch (error) {
        console.log(error);
        switch (error.code) {
          default:
            alert("Something went wrong");
        }
        return;
      }
    },
    async checkbooking() {
      try {
        this.$router.push({ name: "bookHist" });
      } catch (error) {
        console.log(error);
        switch (error.code) {
          default:
            alert("Something went wrong");
        }
        return;
      }
    },
  },
};
</script>

<style scoped>
.container-profile {
  height: 75vh;
  padding-left: 5vw;
  padding-right: 5vw;
  padding: 1vh 10vw 1vh 10vw;
  background-size: 100% 100%;
  background-image: url(../../assets/image/profile.png);
}

h2 {
  font-size: 18px;
  padding: 1vh 5vw 1vh 5vw;
  font-weight: bold;
}
p {
  font-size: 15px;
  padding: 1vh 5vw 1vh 5vw;
}

hr {
  width: 90%;
  color: gray;
  size: 1;
}

.input input {
  width: 30%;
  border: none;
  padding: 4px 4px 4px 30px;
  height: 30px;
  border-radius: 10px;
  font-size: 13px;
  display: block;
  position: relative;
  left: 73px;
}

.btn {
  width: 250px;
  height: 30px;
  border: none;
  background: rgba(237, 209, 96, 0.669);
  color: black;
  font-size: 13px;
  cursor: pointer;
  display: block;
  border: 0ch;
  border-radius: 30px;
  position: relative;
  left: 70px;
}
</style>
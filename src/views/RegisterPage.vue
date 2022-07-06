<template>
<link href='https://css.gg/mail.css' rel='stylesheet'>
<link href='https://css.gg/lock.css' rel='stylesheet'>
<link href='https://css.gg/nametag.css' rel='stylesheet'>
<link href='https://css.gg/sketch.css' rel='stylesheet'>
  <main class="Container">
    <section class="form">
      <form class="register" @submit.prevent="register">
        <p class="login">
          Already have an account?
          <router-link class="router-link" to="/LoginPage">Login</router-link>
        </p>

        <h2>Register</h2>
        <div class="input">
          <i class="gg-mail"></i>
          <input
            type="email"
            placeholder="Email"
            v-model="register_form.email"
            required
          />
        </div>

        <div class="input">
          <i class="gg-lock"></i>
          <input
            type="password"
            placeholder="Password"
            v-model="register_form.password"
            required
          />
          
        </div>

        <div class="input">
          <i class="gg-nametag"></i>
          <input
            type="displayname"
            placeholder="Display name"
            v-model="register_form.name"
            required
          />
        </div>

        <div class="input">
          <i class="gg-sketch"></i>
          <select required v-model="register_form.place">
            <option value="null" disabled selected>
              Place of Residence
            </option>
            <option value="Raffles Hall">Raffles Hall</option>
            <option value="RVRC">RVRC</option>
            <option value="Sheares Hall">Sheares Hall</option>
            <option value="Tembusu RC">Tembusu RC</option>
          </select>
        </div>

        <input class="btn" type="submit" value="Register" />
      </form>
    </section>
  </main>
</template>


<script>
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../firebase/firebaseinit";
import { doc, setDoc } from "firebase/firestore";

export default {
  setup() {
    const register_form = ref({});

    return {
      register_form,
    };
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(
          auth,
          this.register_form.email,
          this.register_form.password
        );
        sendEmailVerification(auth.currentUser).then(() => {
          alert("Email verification sent!");
        });
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }

      await setDoc(doc(db, "bookit-nus", auth.currentUser.uid), {
        email: this.register_form.email,
        displayName: this.register_form.name,
        placeOfResidence: this.register_form.place,
      });

      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style scoped>
.Container {
  padding: 10vh;
  height: 60%;
  display: flex;
  background-image: url("../assets/image/NUS.jpeg");
  background-color: white;
  background-size: 100% 100%;
}

h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 5vh;
  font-weight: bold;
}

.login {
  font-size: 13px;
  margin-bottom: 30px;
}

.form {
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 85vh;
  width: 50%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
}

.form .register {
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 5vh;
  width: 50%;
}

.input input {
  width: 100%;
  border: none;
  padding: 4px 4px 4px 30px;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  background-color: -internal-light-dark(
    rgb(232, 240, 254),
    rgba(70, 90, 126, 0.4)
  ) !important;
  color: -internal-light-dark(black, white) !important;
}

select {
  width: 100%;
  border: none;
  padding: 4px 4px 4px 30px;
  height: 50px;
  border-radius: 10px;
  font-size: 15px;
  background-color: -internal-light-dark(
    rgb(232, 240, 254),
    rgba(70, 90, 126, 0.4)
  ) !important;
  color: -internal-light-dark(black, white) !important;
}

.btn {
  width: 30%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
}

</style>
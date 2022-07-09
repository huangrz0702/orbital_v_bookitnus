<template>
<navigationBar/>
  <div class="container-profile">
    <h1>Greetings, User {{ name1.slice(1, -1) }} !</h1>
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
      <br />

      <input class="btn" id="changename" type="submit" value="Submit" />
    </form>

    <br />
    <hr />

    <form class="changeplace" @submit.prevent="changeplace">
      <h2>Place Of Residence</h2>
      <p>Your current Place Of Residence: {{ venue1.slice(1, -1) }}</p>
      <p>Change your Place Of Residence</p>
      <div class="input">
        <select required v-model="profile.place">
          <option value="null" disabled selected>Place of Residence</option>
          <option value="Raffles Hall">Raffles Hall</option>
          <option value="RVRC">RVRC</option>
          <option value="Sheares Hall">Sheares Hall</option>
          <option value="Tembusu RC">Tembusu RC</option>
        </select>
      </div>
      <br />

      <input class="btn" id="changeplace" type="submit" value="Submit" />
    </form>

    <br />
    <hr />
    <br />

    <form class="info" @submit.prevent="checkbooking">
      <div class="input">
        <input
          class="btn"
          id="currentbook"
          type="submit"
          value="My Current Booking(s)"
        />
        <br />
        <input
          class="btn"
          id="bookhistory"
          type="submit"
          value="My Booking History"
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
import { auth, db } from "../../firebase/firebaseinit.js";
import "firebase/compat/auth";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import navigationBar from '../../components/Navigation.vue'


export default {
  Components: {navigationBar},
  setup() {
    const profile = ref({});
    return {
      profile,
    };
  },

  data() {
    return {
      currentUser: localStorage.getItem("currentuser"),
      dataId: [],
      venue: null,
      name: null,
    };
  },

  created() {
    console.log(this.currentUser);
    const q = query(
      collection(db, "bookit-nus"),
      where("email", "==", this.currentUser.slice(1, -1))
    );
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.dataId.push(doc.id);
        this.name = doc.data().displayName;
        this.venue = doc.data().placeOfResidence;
        localStorage.setItem("placeOfResidence", JSON.stringify(this.venue));
        localStorage.setItem("displayname", JSON.stringify(this.name));
      });
      console.log("venue", this.dataId, this.venue);
    });
  },

  props: {
    name1: {
      type: String,
      default: localStorage.getItem("displayname"),
    },

    venue1: {
      type: String,
      default: localStorage.getItem("placeOfResidence"),
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
        localStorage.setItem("displayname", "");
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
        await updateDoc(doc(db, "bookit-nus", this.dataId[0]), {
          displayName: this.profile.name,
        });
        alert("You have successfully changed your name!");
        this.$router.push({ name: "HomePage" });
      } catch (error) {
        console.log(error);
        switch (error.code) {
          default:
            alert("Something went wrong");
        }
        return;
      }
    },

    async changeplace() {
      try {
        await updateDoc(doc(db, "bookit-nus", this.dataId[0]), {
          placeOfResidence: this.profile.place,
        });
        alert("You have successfully changed your place of residence!");
        this.$router.push({ name: "HomePage" });
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
        this.$router.push({ name: "currentBook" });
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
  width: 35%;
  border: none;
  padding: 4px 4px 4px 30px;
  height: 30px;
  border-radius: 10px;
  font-size: 13px;
  display: block;
  position: relative;
  left: 73px;
}

.input select {
  width: 35%;
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
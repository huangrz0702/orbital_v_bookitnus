<template>
  <form class="book" @submit.prevent="book">
    <div class="popup">
      <label>Specify venue:</label>
      <br />
      <input
        type="venue"
        required
        v-model="book_form.venue"
        placeholder="e.g PGP function room"
      />
      <label>Select Date:</label>
      <br />
      <input type="date" required v-model="book_form.date" />
      <br />
      <label>Select Time:</label>
      <br />
      <input type="time" required v-model="book_form.time" />
      <br />
      <div class="btn">
        <button class="btn" type="submit">Book</button>
        <button class="btn" @click="TogglePopup()">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { auth, db } from "../firebase/firebaseinit";
// import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


export default {
  setup() {
    const book_form = ref({});

    return {
      book_form,
    };
  },

  methods: {
    async book() {
      try {
        await addDoc(collection(db, "bookingDetails"),
          {
            email: auth.currentUser.email,
            venue: this.book_form.venue,
            date: this.book_form.date,
            time: this.book_form.time,
          }
        ).then(() => {
          alert("Book successfully!");
        });
      } catch (error) {
        console.log(error)
        switch (error.code) {
          default:
            alert("Please log in first!");
            this.$router.push({ name: "LoginPage" })
        }
        return;
      }
      this.$router.push({ name: "HomePage" });
    },
  },

  props: ["TogglePopup"],
};
</script>

<style lang="scss" scoped>
.popup {
  align-items: center;
  justify-content: center;
}

.btn {
  margin-top: 10px;
  width: 90%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 12px;
}

</style>
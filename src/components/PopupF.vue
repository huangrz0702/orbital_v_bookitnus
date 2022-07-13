<template>
  <form class="book" @submit.prevent="book">
    <div class="popup">
      <label>Specify location:</label>
      <br />
      <select required v-model="book_form.location">
        <option value="null" selected disabled>Please select a location</option>
        <option value="Raffles Hall">Raffles Hall</option>
        <option value="RVRC">RVRC</option>
        <option value="Sheares Hall">Sheares Hall</option>
        <option value="Tembusu RC">Tembusu RC</option>
      </select>

      <label>Specify venue:</label>
      <br />
      <select required v-model="book_form.venue">
        <option value="null" selected disabled>
          Please select a specific venue
        </option>
        <option value="function/multi-purpose room">
          function/multi-purpose room
        </option>
        <option value="meeting room">meeting room</option>
        <option value="game room">game room</option>
        <option value="basketball court">basketball court</option>
        <option value="tennis court">tennis court</option>
      </select>

      <label
        >Select Date:<br />
        (you can only book the venue one week in advance)</label
      >
      <br />
      <input
        type="date"
        min="2022-08-07"
        max="2022-08-31"
        required
        v-model="book_form.date"
      />
      <br />
      <label
        >Select Time:<br />
        (each session has a duration of one hour)
      </label>
      <br />
      <select required v-model="book_form.time">
        <option value="null" selected disabled>Please select a time</option>
        <option value="08:00">08:00</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
      </select>

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
import {
  collection,
  addDoc,
  query,
  where,
  //onSnapshot,
  //doc,
  getDocs,
} from "firebase/firestore";

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
        if (
          this.book_form.location ==
          localStorage.getItem("placeOfResidence").slice(1, -1)
        ) {
          // check for double booking at a time by the person
          const q1 = query(
            collection(db, "bookingDetails"),
            where(
              "email",
              "==",
              localStorage.getItem("currentuser").slice(1, -1)
            ),
            where("date", "==", this.book_form.date),
            where("time", "==", this.book_form.time)
          );
          const querySnapshot1 = await getDocs(q1);
          var length1 = 0;
          querySnapshot1.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            length1 += 1;
          });
          console.log("length1 " + length1);

          // check for venue availability
          const q2 = query(
            collection(db, "bookingDetails"),
            where("venue", "==", this.book_form.venue),
            where("location", "==", this.book_form.location),
            where("date", "==", this.book_form.date),
            where("time", "==", this.book_form.time)
          );
          const querySnapshot2 = await getDocs(q2);
          var length2 = 0;
          querySnapshot2.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            length2 += 1;
          });
          console.log("length2 " + length2);

          if (length1 != 0) {
            alert(
              "Book unsuccessfully! You can only book one facility at a time!"
            );
            
          } else if (length2 != 0) {
            alert(
              "Book unsuccessfully! The venue has already been booked at that time!"
            );
          
          } else {
            await addDoc(collection(db, "bookingDetails"), {
              email: auth.currentUser.email,
              location: this.book_form.location,
              venue: this.book_form.venue,
              date: this.book_form.date,
              time: this.book_form.time,
            }).then(() => {
              if (
                this.book_form.venue == "tennis court" ||
                this.book_form.venue == "function/multi-purpose room"
              ) {
                alert(
                  "Please contact the management committee for fee payment!"
                );
              }
              alert("Book successfully!");
            });
            this.$router.push({ name: "ProfilePage" });
          }
        } else {
          alert(
            "Book unsuccessfully! You have to select the location that is your place of residence. Or else, please contact your selected location, extra charge may be incurred."
          );
          this.$router.push({ name: "ContactPage" });
        }
      } catch (error) {
        console.log(error);
        switch (error.code) {
          default:
            alert("Please log in first!");
            this.$router.push({ name: "LoginPage" });
        }
        return;
      }
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

select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 12px;
}
</style>
<template>
  <div class="container">
    <section class="form">
      <table class="table" style="text-align: center">
        <thead>
          <tr>
            <th>Venue</th>
            <th>Date</th>
            <th>Time</th>
            <th>Modify</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="booking in bookings" :key="booking.id">
            <td>
              {{ booking.venue }}
            </td>

            <td>
              {{ booking.date }}
            </td>

            <td>
              {{ booking.time }}
            </td>

            <td>
              <button class="btn" @click="editBooking(booking)">Edit</button>
              <br />
              <button class="btn" @click="deleteBooking(booking)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { db } from "../../firebase/firebaseinit";
import { onSnapshot, collection, query, where } from "firebase/firestore";

export default {
  data() {
    return {
      currentUser: localStorage.getItem("currentuser"),
      bookings: [],
    };
  },

  created() {
    console.log(this.currentUser);
    const q = query(
      collection(db, "bookingDetails"),
      where("email", "==", this.currentUser.slice(1, -1))
    );
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.bookings.push(doc.data());
      });
      console.log(
        "bookings",
        querySnapshot.docs.map((doc) => doc.data())
      );
    });
  },
};
</script>

<style scoped>
.container {
  padding: 10vh;
  height: 60%;
  width: 100%;
  display: flex;
  background-size: 100% 100%;
  background-image: url("../../assets/image/about.jpeg");
}

table,
th,
td {
  border: 1px solid #ddd;
  border-collapse: collapse;
}

th {
  height: 70px;
  background-color: rgb(121, 145, 223);
  color: white;
}

td {
  height: 35px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: rgb(197, 162, 65);
}

.btn {
  width: 50%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
  color: black(237, 209, 96, 0.669);
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

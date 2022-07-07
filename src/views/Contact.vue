<template>
  <navigationBar />
  <div class="container">
    <section class="form">
      <table style="text-align: center">
        <tr>
          <th>Venue</th>
          <th>Contact Email</th>
          <th>Phone (if available)</th>
        </tr>
        <tr>
          <td>USC</td>
          <td>sports@nus.edu.sg</td>
          <td>+65 6516 2384</td>
        </tr>
        <tr>
          <td>RVRC</td>
          <td>housing.rvrc@nus.edu.sg</td>
          <td>+65 6601 3886</td>
        </tr>
        <tr>
          <td>PGP</td>
          <td>housing.pgp@nus.edu.sg</td>
          <td>+65 6601 6372</td>
        </tr>
        <tr>
          <td>Utown</td>
          <td>utown@nus.edu.sg</td>
          <td>NA</td>
        </tr>
        <tr>
          <td>Utown Residence</td>
          <td>ohs.utr@nus.edu.sg</td>
          <td>+65 6516 1212</td>
        </tr>
        <tr>
          <td>Tembusu RC</td>
          <td>tembusu@nus.edu.sg</td>
          <td>+65 6601 2150</td>
        </tr>
        <tr>
          <td>CAPT</td>
          <td>ohs.capt@nus.edu.sg</td>
          <td>+65 6601 2779</td>
        </tr>
        <tr>
          <td>RC4</td>
          <td>ohs.rc4@nus.edu.sg</td>
          <td>+65 6601 2774</td>
        </tr>
        <tr>
          <td>Raffles Hall</td>
          <td>ohs.raffles@nus.edu.sg</td>
          <td>+65 6516 2078</td>
        </tr>
        <tr>
          <td>Sheares Hall</td>
          <td>ohs.sheares@nus.edu.sg</td>
          <td>+65 6516 1231</td>
        </tr>
        <tr>
          <td>Temasek Hall</td>
          <td>ohs.temasek@nus.edu.sg</td>
          <td>+65 6516 7131</td>
        </tr>
        <tr>
          <td>Kent Ridge Hall</td>
          <td>ohs.kentridge@nus.edu.sg</td>
          <td>+65 6516 2077</td>
        </tr>
        <tr>
          <td>KE VII HALL</td>
          <td>ohs.ke7@nus.edu.sg</td>
          <td>+65 6516 5774</td>
        </tr>
        <tr>
          <td>Eusoff Hall</td>
          <td>ohs.eusoff@nus.edu.sg</td>
          <td>+65 6516 7150</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import navigationBar from "../components/Navigation.vue";

export default {
  name: "ContactPage",
  Components: { navigationBar },
};
</script>

<style scoped>
.container {
  padding: 10vh;
  height: 60%;
  width: 100%;
  display: flex;
  background-size: 100% 100%;
  background-image: url("../assets/image/about.jpeg");
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
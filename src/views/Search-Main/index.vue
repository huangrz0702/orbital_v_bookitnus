<template>
  <div class="searchbox">
    <div class="top-left">
      <section class="form">
        <form>
          <h2>Search for facilities</h2>
          <label for="fac_type">Facility type:</label>
          <br /><br />

          <select name="fac_type" id="fac_type">
            <option value="default">select an option</option>
            <option value="in_sports">indoor sports</option>
            <option value="out_sports">outdoor sports</option>
            <option value="meet_room">meeting room</option>
            <option value="func_room">function room</option>
            <option value="others">others</option>
          </select>
          <br /><br /><hr><br />

          <label for="venue">Venue:</label>
          <br /><br />
          <select name="venue" id="venue">
            <option value="default">select an option</option>
            <option value="UT">Utown</option>
            <option value="UTR">Utown Residence</option>
            <option value="RC4">RC4</option>
            <option value="CAPT">CAPT</option>
            <option value="Tembu">Tembusu</option>
            <option value="PGP">PGP</option>
            <option value="KE">KE VII Hall</option>
            <option value="Temasek">Temasek Hall</option>
            <option value="Raffles">Raffles Hall</option>
            <option value="KR">Kent Ridge Hall</option>
            <option value="Sheares">Sheares Hall</option>
          </select>
          <br /><br /><hr><br />

          <label for="date">Select Date:</label>
          <br /><br />
          <input type="date" value="date" />
          <br /><br /><hr><br />

          <label for="cost"
            >Only show facilities that are free of charge?</label
          >
          <br /><br />
          <select name="cost" id="cost">
            <option value="free">yes</option>
            <option value="nfree">no</option>
          </select>
          <br /><br /><hr><br />

          <input class="btn" type="submit" value="Search" />
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMainPage",
};
</script>

<style scoped>

.searchbox {
  padding: 10vh;
  height: 60%;
  width: 100%;
  display: flex;
  background-size: 100% 100%;
  background-image: url("../../assets/image/about.jpeg");
}

.top-left {
      padding-right: 30px;
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

h2 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 3vh;
  font-weight: bold;
}

select {
  background-color: rgba(237, 209, 96, 0.669);
  color: black;
  padding: 10px;
  width: 200px;
  border: none;
  font-size: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

input {
  background-color: rgba(237, 209, 96, 0.669);
  color: black;
  padding: 10px;
  width: 200px;
  border: none;
  font-size: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

.btn {
  width:50%;
  padding:10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
  color: black(237, 209, 96, 0.669)
}
</style>
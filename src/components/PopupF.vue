<template>
  <div class="popup">
    <label>Select Date:</label>
    <br />
    <input type="date" />
    <br />
    <label>Select Time:</label>
    <br />
    <input type="time" />
    <br />
    <div class="btn">
      <button class="btn">Book</button>
      <button class="btn" @click="TogglePopup()">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
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

input{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 17px;
  }
</style>
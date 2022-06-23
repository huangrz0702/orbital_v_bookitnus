<template>
  <form class="change" @submit.prevent="change">
    <div class="popup">
      <label>Select Date:</label>
      <br />
      <input type="date" required v-model="change_form.date" />
      <br />
      <label>Select Time:</label>
      <br />
      <input type="time" required v-model="change_form.time" />
      <br />
    </div>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const change_form = ref({});

    return {
      change_form,
    };
  },

  props: ["TogglePopUp"],
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
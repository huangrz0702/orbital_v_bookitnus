<template>
  <div class="fac-card">
    <div class="info">
      <img
        :src="require(`../assets/blogCards/${post.blogCover}.jpeg`)"
        alt=""
      />
      <h4>{{ post.facName }}</h4>
      <h6>Facility Type: {{ post.facType }}</h6>
      <h6>Free Of Charge: {{ post.facCharge }}</h6>
      <br /><br />
      <button class="btn" @click="() => TogglePopup('buttonTrigger')">
        Book The Facility
      </button>
      <Popup
        v-if="popupTriggers.buttonTrigger"
        :TogglePopup="() => TogglePopup('buttonTrigger')"
      >
      </Popup>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Popup from "@/components/Popup.vue";
export default {
  name: "FacCard",
  props: ["post"],
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      Popup,
      popupTriggers,
      TogglePopup,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 90%;
  padding: 10px;
  border: 0ch;
  border-radius: 30px;
  cursor: pointer;
}

.fac-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;
  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }
  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;
    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
    }
    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }
    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: 0.5s ease-in all;
      &:hover {
        color: rgba(237, 209, 96, 0.669);
      }
      .arrow {
        width: 10px;
      }
    }
  }
}
</style>
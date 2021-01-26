<template>
  <div>
    <button type="button" className="btn btn--primary" @click="increaseTotal"><span v-html="getIcon()"></span> <span>Drink a glass</span></button>

    <button type="button" className="btn" @click="decreaseTotal">
      <span>Undo</span>
    </button>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  components: {},

  methods: {
    getIcon() {
      return feather.icons["plus-circle"].toSvg();
    },

    increaseTotal() {
      console.log("increaseTotal");
    },

    decreaseTotal() {
      console.log("decreaseTotal");
    },
  },
};
</script>

<style lang="scss" scoped></style>

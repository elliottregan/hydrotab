<template>
  <button type="button" class="btn btn--primary" @click="increaseTotal">
    <span class="icon" v-html="getIcon()"></span> <span>Drink a glass</span>
  </button>

  <button type="button" class="btn" @click="decreaseTotal">
    <span>Undo</span>
  </button>
</template>

<script>
import feather from 'feather-icons'
import store from '../store'

export default {
  components: {},

  methods: {
    getIcon() {
      return feather.icons['plus-circle'].toSvg()
    },

    increaseTotal() {
      store.commit('increment')
    },

    decreaseTotal() {
      store.commit('decrement')
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  display: inline-flex;
}
</style>

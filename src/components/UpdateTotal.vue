<template>
  <button type="button" class="btn btn--primary" @click="increaseTotal">
    <Icon :name="'plus-circle'" />
    <span>Drink a glass</span>
  </button>

  <button title="Remove a glass" type="button" class="btn" @click="decreaseTotal" :style="{ opacity: (total > 0 ? '1' : '0') }">
    <Icon :name="'minus-circle'" />
  </button>
</template>

<script>
import store from '../store'
import Icon from '../components/Icon'

export default {
  components: {
    Icon,
  },

  computed: {
    total() {
      return store.getters.glasses
    }
  },

  methods: {
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

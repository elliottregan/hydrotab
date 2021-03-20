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
import Icon from '../components/Icon'

export default {
  components: {
    Icon,
  },

  computed: {
    total() {
      return this.$store.getters.glasses
    }
  },

  methods: {
    increaseTotal() {
      this.$store.commit('increment')
    },
    decreaseTotal() {
      this.$store.commit('decrement')
    },
  },
}
</script>

<style lang="scss" scoped>


.btn {
  span {
    transform: translateY(-0.035em);
  }

  .icon {
    display: inline-flex;
  }
}
</style>

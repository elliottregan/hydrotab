<template>
  <section class="card">
    <h1 class="card__title">Time for another glass!</h1>
    <button type="button" class="btn btn--primary" @click="increaseTotal">
      <Icon :name="'plus-circle'"/><span>Drink a glass</span>
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon'

export default defineComponent({
  components: {
    Icon,
  },
  methods: {
    increaseTotal() {
      this.$store.commit('increment')
    },
  },
})
</script>

<style lang="scss" scoped>

</style>
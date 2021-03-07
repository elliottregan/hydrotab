<template>
  <section class="card">
    <h1 class="card__title">Time for another glass!</h1>
    <button type="button" class="btn btn--primary btn--full" @click="increaseTotal">
      <Icon :name="'plus-circle'" /><span>Drink a glass</span>
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
      this.$router.push({ name: 'Home' })
    },
  },
  beforeRouteLeave() {
    if (this.$store.getters.glassRequired) {
      this.$store.commit('updateGlassRequired', false)
    }
  },
})
</script>

<style lang="scss" scoped>
</style>

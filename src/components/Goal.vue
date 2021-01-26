<template>
    <span>{{ total * units.nPerGlass }} {{ units.label }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '../store'
export default defineComponent({
  computed: {
    total () {
      return store.state.options.glassesGoal
    },
    units () {
      return store.state.options.units
    },
  }
})
</script>

<style lang="scss" scoped>

</style>
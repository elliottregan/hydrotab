<template>
    <span>{{ total * units.nPerGlass }} {{ units.label }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  computed: {
    total () {
      // @ts-ignore
      console.log('total', this.$store.state.options)
      // @ts-ignore
      return this.$store.state.options.glassesGoal
    },
    units () {
      // @ts-ignore
      return this.$store.state.options.units
    },
  }
})
</script>

<style lang="scss" scoped>

</style>
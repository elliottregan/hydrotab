<template>
    <span>{{ glasses }}</span>
</template>

<script>
import store from '../store'
export default {
  computed: {
    glasses () {
      return store.state.glasses
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
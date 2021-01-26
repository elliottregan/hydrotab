<template>
    <span>{{ glasses }}</span>
</template>

<script>
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
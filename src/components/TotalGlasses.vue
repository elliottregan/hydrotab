<template>
  <span ref="totalValue">0</span>%
</template>

<script>
import { mapGetters } from 'vuex';
import anime from 'animejs'

export default {
  computed: {
    ...mapGetters([
      'getGoalPercent',
    ]),
  },
  watch: {
    getGoalPercent(newValue, oldValue) {
      const animatedNumber = { value: oldValue }
      anime({
        targets: animatedNumber,
        value: newValue,
        easing: 'easeOutSine',
        update: () => {
          this.$refs.totalValue.innerHTML = animatedNumber.value.toFixed(0)
        },
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <span ref="totalValue">0</span>%
</template>

<script>
// @ts-nocheck
import { mapGetters } from 'vuex';
import anime from 'animejs'

export default {
  computed: {
    ...mapGetters([
      'getGoalPercent',
    ]),
  },
  mounted() {
    this.$refs.totalValue.innerText = this.getGoalPercent.toFixed(0)
  },
  watch: {
    getGoalPercent(newValue, oldValue) {
      const animatedNumber = { value: oldValue }
      anime({
        targets: animatedNumber,
        value: newValue,
        easing: 'easeOutSine',
        update: () => {
          this.$refs.totalValue.innerText = animatedNumber.value.toFixed(0)
        },
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <router-link to="/" class="btn">
    <Icon :name="icon" />
    <span>{{ label }}</span>
  </router-link>
</template>

<script>
import Icon from '../../components/Icon'

export default {
  components: {
    Icon,
  },
  props: {
    label: {
      type: String,
      default: 'Home',
    },
    icon: {
      type: String,
      default: 'home',
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <router-link to="/" class="btn btn--ghost">
    <Icon :name="'home'" />
    <span>Home</span>
  </router-link>
</template>

<script>
import Icon from '../../components/Icon'

export default {
  components: {
    Icon,
  },
}
</script>

<style lang="scss" scoped></style>

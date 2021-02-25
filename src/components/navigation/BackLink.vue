<template>
  <router-link to="/" class="btn btn--ghost">
    <Icon :name="'arrow-left'" />
    <span>Back</span>
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

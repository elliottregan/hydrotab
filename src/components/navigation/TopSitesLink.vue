<template>
  <router-link :to="{name: 'TopSites' }" class="btn btn--ghost">
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
      default: 'Top Sites',
    },
    icon: {
      type: String,
      default: 'bookmark',
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <router-link to="/settings" class="btn">
    <Icon :name="'settings'" />
    <span>Settings</span>
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

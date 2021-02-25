<template>
  <div class="app-wrapper">
    <nav class="header-bar content-container">
      <SettingsLink v-if="isHome" />
      <BackLink v-if="!isHome" />
    </nav>
    <router-view class="app-content"/>
    <Background :fill-percent="fillPercent" />
  </div>
</template>

<script lang="ts">
import './styles/index.scss'
import { defineComponent } from 'vue'
import Background from './components/Background.vue'
import SettingsLink from './components/navigation/SettingsLink.vue'
import HomeLink from './components/navigation/HomeLink.vue'
import BackLink from './components/navigation/BackLink.vue'

export default defineComponent({
  name: 'App',
  components: {
    SettingsLink,
    HomeLink,
    BackLink,
    Background,
  },
  computed: {
    isHome() {
      return this.$route.matched.some(({ name }) => name === 'Home')
    },
    fillPercent() {
      if (this.isHome) {
        return this.$store.getters.getGoalPercent
      } else {
        return 100
      }
    }
  },
})
</script>

<style lang="scss">
.header-bar {
  display: flex;
  width: 100%;
  padding: 1rem;
  opacity: 0.65;
  transition: opacity ease 300ms;

  &:hover, &:focus {
    opacity: 1;
  }
}

.app-wrapper {
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.app-content {
  flex: 1 0 auto;
}
</style>
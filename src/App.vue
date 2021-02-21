<template>
  <div class="app-wrapper">
    <nav class="header-bar content-container">
      <SettingsLink />
      <HomeLink />
    </nav>
    <router-view class="app-content"/>
  </div>
</template>

<script lang="ts">
import './styles/index.scss'
import { defineComponent } from 'vue'
import SettingsLink from './components/navigation/SettingsLink.vue'
import HomeLink from './components/navigation/HomeLink.vue'

export default defineComponent({
  name: 'App',
  components: {
    SettingsLink,
    HomeLink,
  }
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
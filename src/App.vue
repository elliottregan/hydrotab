<template>
  <div class="app-wrapper">
    <nav class="header-bar content-container">
      <SettingsLink v-if="isHome" />
      <BackLink v-if="!isHome" />
      <pre><wbr></pre>
    </nav>
    <main class="app-content centered-content content-container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Background :fill-percent="fillPercent" />
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import './styles/index.scss'
import { defineComponent } from 'vue'
import Background from './components/Background.vue'
import SettingsLink from './components/navigation/SettingsLink.vue'
import HomeLink from './components/navigation/HomeLink.vue'
import BackLink from './components/navigation/BackLink.vue'

const env = import.meta.env

console.log(env)

export default defineComponent({
  name: 'App',
  components: {
    SettingsLink,
    HomeLink,
    BackLink,
    Background,
  },
  data() {
    return {
    }
  },
  computed: {
    isHome() {
      return this.$route.matched.some(({ name }) => name === 'Home')
    },
    isSettings() {
      return this.$route.matched.some(({ name }) => name === 'Settings')
    },
    isNotification() {
      return this.$route.matched.some(({ name }) => name === 'DrinkNotification')
    },
    fillPercent() {
      if (this.isHome || this.isNotification) {
        return this.$store.getters.getGoalPercent
      } else if (this.isSettings) {
        return 100
      } else {
        return 0
      }
    },
    glassRequired() {
      return this.$store.state.notifications.glassRequired
    }
  },
  watch: {
    glassRequired(value) {
      this.$router.push({ name: value ? 'DrinkNotification' : 'Home' })
    }
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
  position: fixed;
  left: 0;
  bottom: 0;

  &:hover,
  &:focus {
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

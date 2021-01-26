<template>
  <Welcome />
</template>

<script lang="ts">
import './styles/index.scss'
import { defineComponent } from 'vue'
import Welcome from './pages/Welcome.vue'

export default defineComponent({
  name: 'App',
  components: {
    Welcome,
  },
})
</script>

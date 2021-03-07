<template>
  <main class="centered-content">
    <div>
      <h1>Settings</h1>
      <div class="field">
        <label for="goal">Goal (glasses):</label>
        <input
          id="goal"
          type="number"
          :value="options.glassesGoal"
          @input="updateGoal"
          class="input"
        />
      </div>
      <div>
        <HomeLink label="Done" icon="check" class="btn--primary" />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import HomeLink from '../components/navigation/HomeLink.vue'

export default defineComponent({
  components: {
    HomeLink,
  },
  computed: {
    ...mapState(['options']),
  },
  methods: {
    updateGoal({ target }: Event) {
      this.$store.commit('updateGoal', (<HTMLInputElement>target).value)
    },
  },
})
</script>

<style scoped>
.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  padding: 0.5em;
}
</style>

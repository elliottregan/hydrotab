<template>
  <main>
    <h1>Settings</h1>
    <div class="field">
      <label for="goal">Goal (glasses):</label>
      <input id="goal" type="number" :value="options.glassesGoal" @input="updateGoal" class="input">
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  components: {
  },
  computed: {
    ...mapState(['options']),
  },
  methods: {
    updateGoal(e: { target: { value: any } }) {
      this.$store.commit('updateGoal', e.target.value)
    }
  }
})
</script>

<style scoped>

.input {
  padding: 0.5em;
}

</style>

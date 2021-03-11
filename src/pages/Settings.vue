<template>
  <main class="centered-content">
    <div class="card">
      <h1 class="card__title">Settings</h1>
      <div class="field">
        <label for="goal" class="label">Goal (glasses):</label>
        <input
          id="goal"
          type="number"
          :value="options.glassesGoal"
          @input="updateGoal"
          class="input"
        />
      </div>
      <div class="field">
        <label for="goal" class="label">Units:</label>
        <div
          v-for="unit in unitOptions"
          :key="unit.label"
          class="radio-field"
        >
          <input 
            type="radio"
            v-model="units"
            :value="unit"
            :id="unit.type"
          >
          <label :for="unit.type" class="label">{{ unit.type }}</label>
        </div>
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
import { Unit } from "../common/types";
import 'vue-next-select/dist/index.min.css'

import HomeLink from '../components/navigation/HomeLink.vue'

export default defineComponent({
  components: {
    HomeLink,
  },
  data() {
    return {
      unitOptions: [
        {
          type: 'Imperial',
          label: 'fl oz',
          nPerGlass: 8,
        },
        {
          type: 'Metric',
          label: 'mL',
          nPerGlass: 240,
        }
      ]
    }
  },
  computed: {
    ...mapState(['options']),
    units: {
      get(): Unit {
        return this.$store.state.options.units
      },
      set(value): void {
        this.$store.commit('updateUnits', value)
      },
    }
  },
  methods: {
    updateGoal({ target }: Event) {
      this.$store.commit('updateGoal', (<HTMLInputElement>target).value)
    },
    updateUnits({ target }: Event) {
      console.log((<HTMLInputElement>target).value)
      this.$store.commit('updateUnits', (<HTMLInputElement>target).value)
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
</style>

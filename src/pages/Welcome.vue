<template>
  <main class="centered-content">
    <div class="welcome">
      <div class="percent">
        <TotalGlasses />
      </div>
      <div class="total-units">{{ glasses }} of {{ glassesGoal }} glasses</div>
      <div class="button-row">
        <UpdateTotal />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TotalGlasses from '../components/TotalGlasses.vue'
import Goal from '../components/Goal.vue'
import UpdateTotal from '../components/UpdateTotal.vue'
import Icon from '../components/Icon'
import { mapGetters } from 'vuex'

export default defineComponent({
  components: {
    TotalGlasses,
    Goal,
    UpdateTotal,
    Icon,
  },
  computed: {
    ...mapGetters([
      'glasses',
      'glassesGoal',
    ]),
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome {
  max-width: 45rem;
}

.percent {
  font-size: 8em;
  line-height: 1;
  text-align: left;
  margin-left: -0.05em;
  font-family: var(--font-serif);
}

.total-units {
  color: #666;
  font-size: 1.5em;
  text-align: left;
}

.row {
  display: inline-flex;
}

.button-row {
  margin-top: 4rem;
}
</style>

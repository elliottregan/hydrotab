<template>
  <div>
    <div class="percent">
      <TotalGlasses />
    </div>
    <div class="total-units">{{ glasses }} of {{ glassesGoal }} glasses</div>
    <div class="button-row">
      <UpdateTotal />
      <!-- <DrinkNotification /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TotalGlasses from '../components/TotalGlasses.vue'
import Goal from '../components/Goal.vue'
import UpdateTotal from '../components/UpdateTotal.vue'
import Icon from '../components/Icon'
import DrinkNotification from '../components/DrinkNotification.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  components: {
    TotalGlasses,
    Goal,
    UpdateTotal,
    Icon,
    DrinkNotification,
  },
  computed: {
    ...mapGetters([
      'glasses',
      'glassesGoal',
    ]),
  },

})
</script>

<style scoped>
.welcome {
  max-width: 45rem;
  margin: auto;
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

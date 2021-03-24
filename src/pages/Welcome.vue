<template>
  <div class="welcome">
    <div class="percent">
      <TotalGlasses />
    </div>
    <div class="total-units">
      {{ glasses }} glasses &middot; {{ totalInUnits }}{{ units.label }}
    </div>
    <div class="button-row">
      <UpdateTotal />
    </div>
    <div v-if="showTopSites" class="card">
      <TopSitesList class="topsites-list" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TotalGlasses from '../components/TotalGlasses.vue'
import Goal from '../components/Goal.vue'
import UpdateTotal from '../components/UpdateTotal.vue'
import TopSitesList from "../components/TopSitesList.vue";
import Icon from '../components/Icon'
import { mapGetters } from 'vuex'
import { Unit } from '../common/types'

export default defineComponent({
  components: {
    TotalGlasses,
    Goal,
    UpdateTotal,
    TopSitesList,
    Icon,
  },
  computed: {
    ...mapGetters(['glasses', 'glassesGoal', 'showTopSites']),
    units(): Unit {
      return this.$store.state.options.units
    },
    totalInUnits(): number {
      return this.units.nPerGlass * this.glasses
    },
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
  opacity: 0.7;
  font-size: 1.5em;
  text-align: left;
}

.row {
  display: inline-flex;
}

.button-row {
  margin-top: 4rem;
}

.card {
  margin: 2rem auto;
}
</style>

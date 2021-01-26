<template>
  <main>
    <div className="Welcome">
      <div className="percent">
        <TotalGlasses />
      </div>
      <div className="total-units"><TotalGlasses /> of <Goal /></div>
      <div className="button-row">
        <UpdateTotal />
      </div>
      <Icon :name="'plus-circle'" />
      <SettingsLink class="settings-link" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TotalGlasses from '../components/TotalGlasses.vue'
import Goal from '../components/Goal.vue'
import UpdateTotal from '../components/UpdateTotal.vue'
import Icon from '../components/Icon'
import SettingsLink from '../components/navigation/SettingsLink.vue'

export default defineComponent({
  components: {
    TotalGlasses,
    Goal,
    UpdateTotal,
    SettingsLink,
    Icon,
  },
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
.Welcome {
  max-width: 45rem;
}

.percent {
  font-size: 8em;
  line-height: 1;
  text-align: left;
  margin-left: -0.05em;
  font-family: var(--font-serif);
}

.settings-link {
  position: fixed;
  right: 1rem;
  top: 1rem;
}

.total-units {
  color: #666;
  font-size: 1.5em;
}

.button-row {
  margin-top: 4rem;
}
</style>
<template>
  <main class="centered-content">
    <div class="card">
      <h1 class="card__title">Top Sites</h1>
      <TopSitesList class="topsites-list" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopSitesList from "../components/TopSitesList.vue";

export default defineComponent({
  components: {
    TopSitesList,
  },
});
</script>

<style lang="scss" scoped>
.topsites-list {
  margin: 1.5em 0;
}
</style>

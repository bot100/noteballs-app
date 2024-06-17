<template>
  <section>
    <StatsTable />
  </section>
</template>

<script setup>
import StatsTable from "./StatsTable.vue";
</script>

<style scoped>
section {
  display: grid;
  place-items: center;
  width: min(90vw, 400px);
}
</style>

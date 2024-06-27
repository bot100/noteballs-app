<template>
  <section>
    <StatsTable />
    <BaseFormItem>
      <input
        type="text"
        placeholder="Do you love noteballs?"
        v-model="text"
        v-autofocus
        :maxlength="maxlength"
      />
    </BaseFormItem>
  </section>
</template>

<script setup>
import StatsTable from "./StatsTable.vue";
import { vAutofocus } from "../../directives/vAutofocus.js";
import { ref } from "vue";
import { useWatchCurCharacters } from "../../hooks/useWatchCurCharacters.js";

const maxlength = 20;
const text = ref(null);

useWatchCurCharacters(text, maxlength);
</script>

<style scoped>
section {
  display: grid;
  place-items: center;
  gap: 10px;
  width: min(90vw, 400px);
}

div {
  width: 100%;
  margin-block-start: 20px;
}
</style>

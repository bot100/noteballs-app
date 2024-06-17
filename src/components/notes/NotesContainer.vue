<template>
  <section>
    <CreateNote />
    <ListNotes />
  </section>
</template>

<script setup>
import CreateNote from "./CreateNote.vue";
import ListNotes from "./ListNotes.vue";
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin-block-end: 20px;
  width: min(90vw, 700px);
}
</style>

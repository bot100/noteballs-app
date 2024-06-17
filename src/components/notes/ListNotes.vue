<template>
  <section>
    <ul>
      <NoteItem
        v-for="item in notes.getNotes"
        :key="item.id"
        :id="item.id"
        :text="item.text"
        :characters="characters(item.id)"
      />
    </ul>
  </section>
</template>

<script setup>
import NoteItem from "./NoteItem.vue";
import { useNotesStore } from "../../store/notes.js";
import { computed } from "vue";

const notes = useNotesStore();

const characters = computed(() => {
  return (id) => {
    const curNote = notes.getNotes.find((note) => note.id === id);
    return curNote.text.length;
  };
});
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

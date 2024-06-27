<template>
  <section>
    <Loader v-if="!notes.isNotesLoaded" />

    <ul ref="ul" v-else>
      <li v-if="!notes.isNotes">
        <small class="message">No notes here yet...</small>
      </li>
      <template v-else>
        <NoteItem
          v-for="item in notes.getNotes"
          :key="item.id"
          :id="item.id"
          :date="item.date"
          :text="item.text"
          :characters="characters(item.id)"
        />
      </template>
    </ul>
  </section>
</template>

<script setup>
import NoteItem from "./NoteItem.vue";
import { useNotesStore } from "../../store/notes.js";
import { computed } from "vue";
import Loader from "../Loader.vue";

const notes = useNotesStore();

const characters = computed(() => {
  return (id) => {
    const curNote = notes.getNotes.find((note) => note.id === id);
    if (!curNote.text) curNote.text = "NOTHING in NOTE";
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

.message {
  display: inline-block;
  margin-block-start: 15px;
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  color: var(--grey);
}
</style>

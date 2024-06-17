<template>
  <table>
    <thead>
      <tr>
        <th>Stat</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Number of Notes</td>
        <td>{{ amountNotes }}</td>
      </tr>
      <tr>
        <td>Number of Characters (all notes)</td>
        <td>{{ characters }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useNotesStore } from "../../store/notes";
import { computed } from "vue";
const notes = useNotesStore();

const amountNotes = computed(() => {
  return notes.getNotes.length;
});

const characters = computed(() => {
  return notes.getNotes.reduce((acc, item) => {
    acc += item.text.length;
    return acc;
  }, 0);
});
</script>

<style scoped>
table {
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  font-size: clamp(18px, 4vw, 20px);
}

th,
td {
  padding: 10px clamp(10px, 3vw, 30px);
}

thead > tr {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey);
}

tbody > tr {
  display: flex;
  justify-content: space-between;
}

tbody > tr:first-of-type {
  border-bottom: 1px solid var(--grey);
}

@media (width > 400px) {
  td {
    width: max-content;
  }
}
</style>

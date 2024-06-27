<template>
  <li class="note-item">
    <div class="note-item__text">{{ text }}</div>
    <div class="note-item__info">
      <small>{{ computeDateNote }} created</small>
      <small>{{ computeCharacters }}</small>
    </div>
    <hr />
    <div class="note-item__buttons">
      <button>
        <RouterLink :to="computeLinkEdit">Edit</RouterLink>
      </button>
      <hr />
      <button @click="handleModal">Delete</button>
    </div>
    <Teleport to="body">
      <BaseModal
        v-if="controlModal"
        title="Delete Note"
        :active="controlModal"
        @update:control-modal="controlModal = $event"
      >
        <template #description>{{ description }}</template>
        <template #footer>
          <BaseButton @click="closeModal" class="btn-white">Cancel</BaseButton>
          <BaseButton @click="notes.deleteNote(id)" class="btn-red"
            >Delete</BaseButton
          >
        </template>
      </BaseModal>
    </Teleport>
  </li>
</template>

<script setup>
import { computed, ref } from "vue";
import { useNotesStore } from "../../store/notes";
import { useDateFormat, useNow } from "@vueuse/core";

const { id, date, text, characters } = defineProps([
  "id",
  "date",
  "text",
  "characters",
]);
const notes = useNotesStore();
const controlModal = ref(false);
const description = ref("Are you sure you want to delete this note?");

const computeLinkEdit = computed(() => `/notes/${id}`);

const computeCharacters = computed(() => {
  return `${characters} ${characters > 1 ? "characters" : "character"}`;
});

const computeDateNote = computed(() => {
  const dateObj = new Date(+date);
  const finalDate = useDateFormat(dateObj, "YYYY-MM-DD @ HH:mm").value;
  return finalDate;
});

function closeModal() {
  controlModal.value = false;
}

function handleModal() {
  scrollToTop();
  controlModal.value = true;
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
</script>

<style scoped>
li.note-item {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: min(90vw, 700px);
  word-wrap: break-word;
}

div.note-item__text {
  padding: 10px 20px;
  font-size: 18px;
}

div.note-item__info {
  display: flex;
  justify-content: space-between;
  margin-block-end: 15px;
  padding: 5px 15px;
}

small {
  font-size: 16px;
  color: var(--grey);
}

hr {
  height: 1px;
  width: 100%;
  border: unset;
  background-color: var(--grey);
}

div.note-item__buttons {
  display: flex;
  justify-content: space-around;
}

div.note-item__buttons > button {
  background-color: transparent;
  padding: 10px;
  border: unset;
  font-size: 20px;
  color: var(--green-dark);
  flex-grow: 2;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--green-normal);
  }
}

a {
  text-decoration: none;
  color: var(--green-dark);
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--green-normal);
  }
}

div.note-item__buttons > hr {
  height: 50px;
  width: 1px;
  border: unset;
  background-color: var(--grey);
}
</style>

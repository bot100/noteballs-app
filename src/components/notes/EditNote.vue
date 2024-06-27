<template>
  <BaseForm class="form-blue form-edit" @submit.prevent="handleSubmit">
    <BaseFormItem class="form-item">
      <label class="label-title" for="note">{{ title }}</label>
      <textarea name="note" id="note" v-model="textNew">{{ textNew }}</textarea>
    </BaseFormItem>
    <BaseFormItem class="form-item">
      <BaseButton class="btn-white">Cancel</BaseButton>
      <BaseButton class="btn-blue">Save Note</BaseButton>
    </BaseFormItem>
  </BaseForm>
</template>

<script setup>
import { useNotesStore } from "../../store/notes.js";
import { useRoute, useRouter, onBeforeRouteLeave } from "vue-router";
import { useCancel } from "../../hooks/useCancel.js";
import { ref, onMounted, onBeforeUnmount } from "vue";

const route = useRoute();
const router = useRouter();
const notes = useNotesStore();
const { cancel } = useCancel();

const title = ref("Edit Note");

const currentID = route.params.id;
const currentNote = notes.getNotes.find((note) => note.id === currentID);
const { text: textNote } = currentNote || { text: "default" };

const textNew = ref(textNote);

function beforeRouteLeave(to, from, next) {
  if (currentNote && currentNote.text === textNew) {
    const answer = window.confirm(
      "Do you really want to leave? You have unsaved changes!"
    );

    if (answer) {
      next(); // Continue with the navigation
    } else {
      next(false); // Cancel the navigation
    }
  } else {
    next();
  }
}

function updateNote(ID) {
  notes.updateNote(textNew.value, ID);
  router.push("/notes");
}

function handleSubmit(e) {
  if (e.submitter.classList.contains("btn-blue")) {
    if (textNew.value !== textNote) {
      updateNote(currentID);
    } else {
      title.value = "Change text";
      const labelTitle = document.querySelector(".label-title");
      labelTitle.classList.add("warning");
      return;
    }
  } else {
    cancel();
  }
}

onBeforeRouteLeave(beforeRouteLeave);
</script>

<style scoped>
.form-edit {
  width: min(90vw, 700px);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
}

label {
  color: var(--white);
}
</style>

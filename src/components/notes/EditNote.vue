<template>
  <BaseForm class="form-blue" @submit.prevent="handleSubmit">
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
import { useRoute, useRouter } from "vue-router";
import { useCancel } from "../../hooks/useCancel.js";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();
const notes = useNotesStore();
const { cancel } = useCancel();

const title = ref("Edit Note");
const currentID = route.params.id;
// console.log(currentID);
// console.log(notes.$state);
const currentNote = notes.getNotes.find((note) => note.id === currentID);
const { text: textNote } = currentNote;

const textNew = ref(textNote);

function updateNote() {
  currentNote.text = textNew;
  router.push("/notes");
}

function handleSubmit(e) {
  if (e.submitter.classList.contains("btn-blue")) {
    if (textNew.value !== textNote) {
      updateNote();
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
</script>

<template>
  <BaseForm class="form-green" @submit.prevent="newNote">
    <BaseFormItem>
      <label v-if="validator" class="warning" for="note"
        >Textarea field must be filled!</label
      >
      <textarea
        name="note"
        id="note"
        placeholder="Add new note"
        v-model="text"
      ></textarea>
    </BaseFormItem>
    <BaseFormItem>
      <BaseButton class="btn-green">Add New Note</BaseButton>
    </BaseFormItem>
  </BaseForm>
</template>

<script setup>
import { ref } from "vue";
import { useNotesStore } from "../../store/notes.js";

const notes = useNotesStore();
const text = ref(null);
const validator = ref(false);

function newNote() {
  text.value = text.value.trim();

  if (text.value) {
    validator.value = false;

    notes.getNotes.push({
      id: `id${Math.random().toString(16).slice(2)}`,
      text: text.value,
    });

    text.value = "";
  } else validator.value = true;

  return;
}
</script>

<template>
  <BaseForm
    class="form-green"
    @keyup.alt.enter="newNote"
    @submit.prevent="newNote"
  >
    <BaseFormItem>
      <Transition name="fade" mode="out-in">
        <BaseLabel v-if="validator" for="note">
          <template #title>
            <BaseTitleMessage class="warning">Warning:</BaseTitleMessage>
          </template>
          <template #default> field must be filled!</template>
        </BaseLabel>

        <BaseLabel v-else-if="tipsActive" for="note" class="tips">
          <template #title>
            <BaseTitleMessage class="tip">Tip:</BaseTitleMessage>
          </template>
          <template #default>
            hot key - "Alt + Enter" for quick submit.</template
          ></BaseLabel
        >
      </Transition>

      <textarea
        name="note"
        id="note"
        placeholder="Add new note"
        v-model="text"
        v-autofocus
        :maxlength="maxlength"
      ></textarea>
    </BaseFormItem>

    <BaseFormItem>
      <BaseButton class="btn-green">Add New Note</BaseButton>
    </BaseFormItem>
  </BaseForm>
</template>

<script setup>
import { ref, watch } from "vue";
import { vAutofocus } from "../../directives/vAutofocus.js";
import { useWatchCurCharacters } from "../../hooks/useWatchCurCharacters.js";
import { useNotesStore } from "../../store/notes.js";

const notes = useNotesStore();
const text = ref(null);
const validator = ref(false);
const tipsActive = ref(false);
const maxlength = 100;

useWatchCurCharacters(text, maxlength);

watch(text, (newValue) => {
  if (newValue) {
    tipsActive.value = true;
    validator.value = false;
  } else {
    tipsActive.value = false;
  }
});

function newNote() {
  if (text.value === null) {
    validator.value = true;
    return;
  }

  text.value = text.value.trim();

  if (text.value) {
    validator.value = false;
    tipsActive.value = false;

    notes.addNote(text);

    text.value = "";
  } else {
    tipsActive.value = false;
    validator.value = true;
  }

  return;
}
</script>

<template>
  <div class="modal-container">
    <div class="modal">
      <div class="header">
        <h2 class="title">{{ title || "Modal" }}</h2>
        <BaseButton class="btn-close" @click="closeModal">
          <img src="../../assets//close-button.svg" alt="icon-close" />
        </BaseButton>
      </div>
      <p class="description">
        <slot name="description"></slot>
      </p>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
    <BaseDropShadow
      v-if="active"
      :active="active"
      @update:active="updateProp($event)"
    ></BaseDropShadow>
  </div>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";

const { active, title } = defineProps(["active", "title"]);
const emit = defineEmits(["update:control-modal"]);

const updateProp = (newValue) => {
  emit("update:control-modal", newValue);
};

function closeModal() {
  updateProp(false);
}
</script>

<style scoped>
.modal-container {
  display: grid;
  place-items: center;
  position: absolute;
  inset: 0;
  z-index: 1;
}

.modal {
  width: min(90vw, 500px);
  color: #000;
  z-index: var(--z-index-modal);
  background-color: color-mix(in srgb, var(--background) 90%, #000);
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.title {
  font-size: 25px;
}

p.description {
  font-size: 18px;
  padding: 15px 10px;
  background-color: var(--white);
  border-top: 1px solid var(--grey);
  border-bottom: 1px solid var(--grey);
  margin-block-end: 10px;
}

.footer {
  display: flex;
  justify-content: end;
  padding: 10px;
  gap: 10px;
}
</style>

<template>
  <div
    ref="divTransparent"
    @click="removeTransparent"
    class="transparent"
    :class="{ 'transparent--show': active }"
  ></div>
</template>

<script setup>
import { ref } from "vue";

const { active } = defineProps(["active"]);
const emit = defineEmits(["update:active"]);

const updateProp = (newValue) => {
  emit("update:active", newValue);
};

const divTransparent = ref(null);

function removeTransparent() {
  updateProp(false);
  divTransparent.value.classList.remove("transparent--show");
}
</script>

<style scoped>
.transparent {
  display: none;
  position: absolute;
  inset: 0;
  backdrop-filter: blur(5px);
  height: 100vh;
  width: 100%;
  z-index: var(--z-index-transparent);
}

.transparent--show {
  display: block;
  opacity: 1;
  @starting-style {
    opacity: 0;
  }
}
</style>

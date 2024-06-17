<template>
  <div class="burger-menu" @click="$emit('toggle')">
    <img src="../assets/burger-menu/burger-menu.svg" alt="burger-menu" />
  </div>
</template>

<script setup>
defineEmits(["toggle"]);
</script>

<style scoped>
.burger-menu {
  display: none;
  width: 50px;
  height: auto;
  z-index: 3;
}

@media (width < 400px) {
  .burger-menu {
    display: block;
    transition: scale 0.3s ease-in-out;

    &:active {
      scale: 0.9;
    }
  }
}
</style>

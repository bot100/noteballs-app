<template>
  <TheHeader />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  margin-block-start: 20px;
}

/* Animations */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>

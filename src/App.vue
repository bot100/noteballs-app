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
import { useAuthStore } from "./store/auth.js";
import { onMounted } from "vue";

const accounts = useAuthStore();

onMounted(() => {
  accounts.init();
});
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  margin-block-start: 20px;
}
</style>

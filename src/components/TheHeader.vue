<template>
  <header>
    <h1><RouterLink to="/notes">Noteballs</RouterLink></h1>
    <nav class="nav" ref="nav" :class="{ toggle: active }">
      <RouterLink to="/notes">Notes</RouterLink>
      <RouterLink to="/stats">Stats</RouterLink>
    </nav>
    <TheBurgerMenu v-if="nav" @toggle="toggle" />
    <BaseDropShadow
      v-if="active"
      :active="active"
      @update:active="active = $event"
      class="transparent--active"
    />
  </header>
</template>

<script setup>
import { ref } from "vue";
import TheBurgerMenu from "./TheBurgerMenu.vue";

const body = document.querySelector("#body");
const nav = ref(null);
const active = ref(false);

function toggle() {
  active.value = !active.value;
}

window.addEventListener("resize", () => {
  if (body.clientWidth >= 400) {
    active.value = false;
  }
});
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--green-normal);
  color: var(--white);
  padding: 0 clamp(10px, 5vw, 50px);
  z-index: var(--z-index-header);
}

h1 {
  letter-spacing: 1.5px;
}

h1 a {
  font-size: 30px;
  color: var(--white);
  text-decoration: none;
}

nav.toggle {
  opacity: 1;
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
  z-index: var(--z-index-nav);
  background-color: var(--green-dark);
  height: 100dvh;
  width: 200px;

  @starting-style {
    opacity: 0;
  }
}

nav > a {
  text-align: center;
  display: inline-block;
  color: currentColor;
  text-decoration: none;
  font-size: 20px;
  padding: 20px clamp(10px, 5vw, 30px);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: color-mix(in srgb, var(--green-normal) 80%, black);
  }
}

@media (width >= 1920px) {
  header {
    justify-content: space-around;
  }
}

@media (width >= 400px) {
  .transparent--active {
    display: none;
    opacity: 0;
  }
}

@media (width < 400px) {
  header {
    padding: 10px 30px;
  }

  nav {
    display: none;
    opacity: 0;
  }
}
</style>

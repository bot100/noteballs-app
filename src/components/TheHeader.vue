<template>
  <header :class="{ 'active-user': !accounts.isActiveUser }">
    <h1><RouterLink to="/">Noteballs</RouterLink></h1>
    <nav
      class="nav"
      ref="nav"
      :class="{ toggle: active, 'active-user': accounts.isActiveUser }"
    >
      <div v-if="accounts.isActiveUser" class="block-1">
        <BaseButton @click="logout" class="btn-blue"
          >{{ emailCompute }}
        </BaseButton>
      </div>
      <div class="block-2">
        <RouterLink to="/notes">Notes</RouterLink>
        <RouterLink to="/stats">Stats</RouterLink>
      </div>
      <div v-if="active" class="block-3">
        <BaseButton class="btn-white" @click="toggle">Close Bar</BaseButton>
      </div>
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
import { ref, computed } from "vue";
import TheBurgerMenu from "./TheBurgerMenu.vue";
import { useAuthStore } from "./../store/auth";
import lodash from "lodash";

const accounts = useAuthStore();
const body = document.querySelector("#body");
const nav = ref(null);
const active = ref(false);

const emailCompute = computed(() => {
  return lodash.isEmpty(accounts.user)
    ? "Guest mode, try auth!"
    : `Log out ${accounts.user.email}`;
});

function logout() {
  accounts.logoutUser();
  accounts.isActiveUser = false;
  active.value = false;
}

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
  gap: 20px;
  transition: filter 0.3s ease-in-out;
}

header.active-user {
  filter: opacity(0.7);
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 10;
  }
}

h1 {
  letter-spacing: 1.5px;
}

h1 a {
  font-size: 30px;
  color: var(--white);
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;
}

nav.active-user {
  justify-content: space-between;
}

nav.toggle {
  opacity: 1;
  display: flex;
  justify-content: start;
  flex-direction: column;
  position: fixed;
  inset: 0;
  z-index: var(--z-index-nav);
  background-color: var(--green-dark);
  height: 100dvh;
  width: max-content;

  @starting-style {
    opacity: 0;
  }
}

.block-2 {
  display: flex;
}

.block-2 > a {
  color: currentColor;
  text-decoration: none;
  font-size: 20px;
  padding: 20px clamp(10px, 5vw, 30px);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: color-mix(in srgb, var(--green-normal) 80%, black);
  }
}

.router-link-exact-active {
  background-color: color-mix(in srgb, var(--green-normal) 80%, black);
}

.btn-auth {
  font-size: 18px;
  color: var(--white);
  background-color: var(--blue-normal);
  padding: 5px 10px;
  transition: scale 0.3s ease-in-out;

  &:active {
    scale: 0.95;
  }
}

@media (width >= 1920px) {
  header {
    justify-content: space-around;
  }
}

@media (width >= 800px) {
  .transparent--active {
    display: none;
    opacity: 0;
  }
}

@media (width < 800px) {
  header {
    padding: 10px 30px;
  }

  .block-1 {
    background-color: var(--blue-normal);
  }

  .block-2 {
    width: 100%;
    flex-direction: column;
  }

  .block-2 > a {
    text-align: center;
  }

  nav {
    display: none;
    opacity: 0;
    gap: 10px;
  }

  .btn-white {
    padding: 5px 30px;
  }
}
</style>

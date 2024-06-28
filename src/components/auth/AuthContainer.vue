<template>
  <section class="auth-container">
    <div class="bar">
      <a @click="login" :class="{ active: loginActive }">Login</a>

      <a @click="register" :class="{ active: registerActive }"> Register </a>
    </div>
    <hr />
    <Transition name="fade" mode="out-in">
      <Login v-if="activeModal === 'login'" />
      <Register v-else />
    </Transition>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

const loginActive = ref(true);
const registerActive = ref(false);
const activeModal = ref("login");

function login() {
  activeModal.value = "login";
  loginActive.value = true;
  registerActive.value = false;
}

function register() {
  activeModal.value = "register";
  registerActive.value = true;
  loginActive.value = false;
}
</script>

<style scoped>
.bar {
  z-index: 2;
}

hr {
  border: unset;
  background-color: var(--grey);
  width: min(90vw, calc(100% + 400px));
  height: 2px;
  margin-block-start: 8px;
  margin-block-end: 20px;
  z-index: 1;
}

.auth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  font-size: 20px;
  letter-spacing: 1.5px;
  padding: 10px;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease-in-out;
  cursor: pointer;
}

a.active {
  border-color: var(--blue-normal);
}
</style>

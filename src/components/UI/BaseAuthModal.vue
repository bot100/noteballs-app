<template>
  <section class="section-auth">
    <h2>{{ title }}</h2>
    <BaseForm
      class="form-auth"
      @submit.prevent="submitData"
      @keyup.alt.enter="submitData"
    >
      <BaseFormItem>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="john@gmail.com"
          required
        />
      </BaseFormItem>
      <BaseFormItem>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="Enter a password"
          minlength="6"
          maxlength="10"
          required
        />
      </BaseFormItem>
      <BaseFormItem>
        <BaseButton class="btn-green">{{ title }}</BaseButton>
      </BaseFormItem>
    </BaseForm>
  </section>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import { reactive, toRefs } from "vue";
import { useAuthStore } from "../../store/auth.js";
import { useRouter } from "vue-router";

const { title, type } = defineProps(["title", "type"]);

const accounts = useAuthStore();
const router = useRouter();

const user = reactive({
  email: "",
  password: null,
});

const { email, password } = toRefs(user);

function submitData() {
  if (!user.email || !user.password) {
    alert("Please fill of your date the fields!");
    return;
  }

  if (type === "login") {
    accounts.loginUser(user);
  }

  if (type == "register") {
    accounts.registerUser(user);
  }

  user.email = "";
  user.password = "";

  // router.push("/notes");
}
</script>

<style scoped>
.section-auth {
  padding: 15px 10px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  width: min(90vw, 400px);
}

h2 {
  text-align: center;
  font-size: 28px;
}

.form-auth {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>

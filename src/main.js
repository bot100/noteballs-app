import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/null.css";
import "./assets/style.css";
import App from "./App.vue";
import router from "./router";
import BaseForm from "./components/UI/BaseForm.vue";
import BaseFormItem from "./components/UI/BaseFormItem.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseModal from "./components/UI/BaseModal.vue";
import BaseDropShadow from "./components/UI/BaseDropShadow.vue";

const app = createApp(App);
const pinia = createPinia();

app.component("BaseForm", BaseForm);
app.component("BaseFormItem", BaseFormItem);
app.component("BaseButton", BaseButton);
app.component("BaseModal", BaseModal);
app.component("BaseDropShadow", BaseDropShadow);

app.use(router);
app.use(pinia);

app.mount("#app");

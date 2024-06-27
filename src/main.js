import { createApp, markRaw } from "vue";
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
import BaseAuthModal from "./components/UI/BaseAuthModal.vue";
import BaseLabel from "./components/UI/BaseLabel.vue";
import BaseTitleMessage from "./components/UI/BaseTitleMessage.vue";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.component("BaseForm", BaseForm);
app.component("BaseFormItem", BaseFormItem);
app.component("BaseButton", BaseButton);
app.component("BaseModal", BaseModal);
app.component("BaseDropShadow", BaseDropShadow);
app.component("BaseAuthModal", BaseAuthModal);
app.component("BaseLabel", BaseLabel);
app.component("BaseTitleMessage", BaseTitleMessage);

app.use(pinia);
app.use(router);

app.mount("#app");

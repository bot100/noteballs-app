import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/auth.js";
import NotesContainer from "../components/notes/NotesContainer.vue";
import StatsContainer from "../components/stats/StatsContainer.vue";
import AuthContainer from "../components/auth/AuthContainer.vue";
import EditNote from "../components/notes/EditNote.vue";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/notes",
    },
    {
      path: "/notes",
      name: "notes",
      component: NotesContainer,
    },
    {
      path: "/notes/:id",
      name: "edit",
      component: EditNote,
    },
    {
      path: "/stats",
      name: "stats",
      component: StatsContainer,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthContainer,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

// navigation guards
router.beforeEach(async (to, from) => {
  const accounts = useAuthStore();

  if (!accounts.user.id && to.name !== "auth") {
    return { name: "auth" };
  }

  if (accounts.user.id && to.name === "auth") {
    return false;
  }
});

export default router;

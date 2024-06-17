import { createRouter, createWebHistory } from "vue-router";
import NotesContainer from "../components/notes/NotesContainer.vue";
import StatsContainer from "../components/stats/StatsContainer.vue";
import EditNote from "../components/notes/EditNote.vue";

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
      component: EditNote,
    },
    {
      path: "/stats",
      name: "stats",
      component: StatsContainer,
    },
  ],
});

export default router;

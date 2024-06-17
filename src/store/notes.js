import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  state: () => {
    return {
      notes: [
        {
          id: "n1",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maxime.",
        },
      ],
    };
  },

  getters: {
    getNotes(state) {
      return state.notes;
    },
  },

  actions: {
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});

import { db } from "../js/firebase.js";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth.js";

import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";

let getNotesSnapshot = null;
let notesCollectionRef;
let notesCollectionQuery;

export const useNotesStore = defineStore("notes", {
  state: () => {
    return {
      notes: [],

      isNotesLoaded: false,
    };
  },

  getters: {
    getNotes(state) {
      return state.notes;
    },

    isNotes(state) {
      return state.notes.length > 0;
    },
  },

  actions: {
    init() {
      // initialize our database refs
      const accounts = useAuthStore();

      notesCollectionRef = collection(db, "users", accounts.user.id, "notes");

      notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

      this.getNotesFromFireStore();
    },

    async deleteNote(id) {
      // this.notes = this.notes.filter((note) => note.id !== id);
      await deleteDoc(doc(notesCollectionRef, id));
    },

    async updateNote(newText, curID) {
      await updateDoc(doc(notesCollectionRef, curID), { text: newText });
    },

    async getNotesFromFireStore() {
      // listening for changes
      if (getNotesSnapshot) getNotesSnapshot(); // unsubscribe from any active listener

      getNotesSnapshot = onSnapshot(
        notesCollectionQuery,
        (querySnapshot) => {
          const notes = [];
          querySnapshot.forEach((doc) => {
            const { text, date } = doc.data();
            notes.push({
              id: doc.id,
              date,
              text,
            });
          });

          this.notes = notes;
          this.isNotesLoaded = true;
        },
        (error) => {
          console.log(error);
        }
      );
    },

    async addNote(text) {
      const curDate = new Date().getTime();
      const dateCur = curDate.toString();

      await addDoc(notesCollectionRef, {
        text: text.value,
        date: dateCur,
      });
    },

    clearNotes() {
      this.notes = [];
    },
  },
});

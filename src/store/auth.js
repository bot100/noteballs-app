import { defineStore } from "pinia";
import { auth } from "../js/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNotesStore } from "./notes.js";

export const useAuthStore = defineStore("accounts", {
  state: () => {
    return {
      user: {},

      isActiveUser: false,
    };
  },

  getters: {
    getUser(state) {
      return state.user;
    },
  },

  actions: {
    init() {
      const notes = useNotesStore();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = {
            id: user.uid,
            email: user.email,
          };

          notes.init();

          this.router.push("/notes");
          this.isActiveUser = true;
        } else {
          this.user = {};
          this.isActiveUser = false;
          this.router.push("/auth");
          notes.clearNotes();
        }
      });
    },

    logoutUser() {
      signOut(auth)
        .then(() => {
          console.log("user signed out");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    registerUser(user) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    loginUser(user) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
});

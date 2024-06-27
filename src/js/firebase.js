import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMGIq5WoKong1FgVJydBSatRtXvVrNIGo",
  authDomain: "noteballs-app-f5963.firebaseapp.com",
  databaseURL: "https://noteballs-app-f5963-default-rtdb.firebaseio.com",
  projectId: "noteballs-app-f5963",
  storageBucket: "noteballs-app-f5963.appspot.com",
  messagingSenderId: "657087244495",
  appId: "1:657087244495:web:047d2eeaae8b63af592fba",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { db, auth };

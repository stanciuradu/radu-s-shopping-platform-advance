import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "../configs/firebase";
import "firebase/firestore";
firebase.initializeApp(firebaseConfig);

// crearea provider-ului-> in cazul nostru Google
const provider = new firebase.auth.GoogleAuthProvider();
// functia pentru autententificare
export function signInWithGoogle() {
  return firebase.auth().signInWithPopup(provider);
}
// functie pentru delogare
export function signOut() {
  return firebase.auth().signOut();
}

export const auth = firebase.auth();

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcRP0Yux8x-z2MFyuAUcnqOzsxSXMbkys",
    authDomain: "crown-db-746c7.firebaseapp.com",
    databaseURL: "https://crown-db-746c7.firebaseio.com",
    projectId: "crown-db-746c7",
    storageBucket: "",
    messagingSenderId: "353089079523",
    appId: "1:353089079523:web:83c3c316324dcca8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

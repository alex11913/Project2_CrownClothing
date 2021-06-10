import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCeKG2K3BVY_yJYjtzMLhvBErARNDGAKpU",
    authDomain: "crwn-db-5f318.firebaseapp.com",
    projectId: "crwn-db-5f318",
    storageBucket: "crwn-db-5f318.appspot.com",
    messagingSenderId: "190943416122",
    appId: "1:190943416122:web:eceedf5078136203418a03",
    measurementId: "G-E9MNSH3KXF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
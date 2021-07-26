import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKKonc5u574JV6u8ixQGXt2wQjqkxycMo",
    authDomain: "twitter-clone-a2978.firebaseapp.com",
    projectId: "twitter-clone-a2978",
    storageBucket: "twitter-clone-a2978.appspot.com",
    messagingSenderId: "795393090676",
    appId: "1:795393090676:web:6f6f8e1fea295c552a9d21",
    measurementId: "G-MRNV4GSGX6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;
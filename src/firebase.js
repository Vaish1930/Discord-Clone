import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDeTjaxNlIMcW1LyjwxSXn8Qq44PRiZ0wY",
    authDomain: "discord-clone-yt-134de.firebaseapp.com",
    databaseURL: "https://discord-clone-yt-134de.firebaseio.com",
    projectId: "discord-clone-yt-134de",
    storageBucket: "discord-clone-yt-134de.appspot.com",
    messagingSenderId: "71356368686",
    appId: "1:71356368686:web:32fea1c293065b6eb85cbf",
    measurementId: "G-5L9C225W8H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
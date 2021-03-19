// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAF40ejBltkMTlVhgY1colBrnzAx4iswA",
  authDomain: "drive-project-26f32.firebaseapp.com",
  projectId: "drive-project-26f32",
  storageBucket: "drive-project-26f32.appspot.com",
  messagingSenderId: "1023743074632",
  appId: "1:1023743074632:web:fbef761f2eb0a0d7f7537d",
  measurementId: "G-EZDWKEZCVD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, db, storage };

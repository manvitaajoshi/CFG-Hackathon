import firebase from "firebase/app"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyC5fUx5f5iItXsh-NjxHKx87snfKFNizMA",
    authDomain: "cfg-prac.firebaseapp.com",
    databaseURL: "https://cfg-prac-default-rtdb.firebaseio.com",
    projectId: "cfg-prac",
    storageBucket: "cfg-prac.appspot.com",
    messagingSenderId: "80362662700",
    appId: "1:80362662700:web:e356975dbec8a31209da89",
    measurementId: "G-J4LRFPPEJG"
}

const app = firebase.initializeApp(firebaseConfig);
// export const db = firebase.database().ref();
export const auth=app.auth();
export default app;
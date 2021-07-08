import firebase from "firebase/app"
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDHB-g0KXQhiWeTvqkC2F2QfQ96rSru_oE",
    authDomain: "chat-b60ec.firebaseapp.com",
    projectId: "chat-b60ec",
    storageBucket: "chat-b60ec.appspot.com",
    messagingSenderId: "19215303097",
    appId: "1:19215303097:web:94ed4e2ba2c2c465abf668"
}).auth();
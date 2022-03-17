import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBN3imXN9PBvXhqiwxHilasYLZOhMEZyck",
    authDomain: "aahc-alert.firebaseapp.com",
    projectId: "aahc-alert",
    storageBucket: "aahc-alert.appspot.com",
    messagingSenderId: "98178258568",
    appId: "1:98178258568:web:cc792a1209eaf7883a313d",
    measurementId: "G-PTDPVT39LN"
});

let db = firebase.firestore();

export default {
    firebase, db
}
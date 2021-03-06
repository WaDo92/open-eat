import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBJf_-yww-gKOKJ8OmztbJf2CIcqyGx9T4",
    authDomain: "pwa-firebas.firebaseapp.com",
    databaseURL: "https://pwa-firebas.firebaseio.com",
    projectId: "pwa-firebas",
    storageBucket: "pwa-firebas.appspot.com",
    messagingSenderId: "736073550328",
    appId: "1:736073550328:web:ff0769ca489a5211222e0d",
    measurementId: "G-295MDY9DGK"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 

export const firestore = firebase.firestore();
export const fireAuth = firebase.auth();
export const fireStorage = firebase.storage();
export const fireMessaging = firebase.messaging().usePublicVapidKey('BNrYmtNEWt_xlE3dlu4xk5vPM5ISWkVL0F0zJw_arH8cyQ5_Z4Ygvz7_6w-BYlV2cfVjIHvuMz2yQlWjrdCc-5U');

export default firebase;

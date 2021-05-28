import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyCHe1T1ryGwvHQ--qJQKIRK7e3dj-_Tv6Y',
    authDomain: 'album-ce0b0.firebaseapp.com',
    projectId: 'album-ce0b0',
    storageBucket: 'album-ce0b0.appspot.com',
    messagingSenderId: '122941870875',
    appId: '1:122941870875:web:c025ae8ebeb72ecfc7f9be',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

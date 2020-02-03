import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAzMzj3mUy3OZkyGjiive8_VIdc0NwQdfc",
    authDomain: "mpreact-e104f.firebaseapp.com",
    databaseURL: "https://mpreact-e104f.firebaseio.com",
    projectId: "mpreact-e104f",
    storageBucket: "mpreact-e104f.appspot.com",
    messagingSenderId: "1022762107332",
    appId: "1:1022762107332:web:7327079e4b24afc0062491",
    measurementId: "G-PDME79VFQQ"
}

const Firebase = firebase.initializeApp(config);

export default Firebase;
    
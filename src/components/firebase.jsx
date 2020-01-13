import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBOgGHJqNIPxar1fWJqHOc7-rbMPIUkMmU",
    authDomain: "undefined-baas.firebaseapp.com",
    databaseURL: "https://undefined-baas.firebaseio.com",
    projectId: "undefined-baas",
    storageBucket: "undefined-baas.appspot.com",
    messagingSenderId: "489102135161",
    appId: "1:489102135161:web:e2922f48b9334f1cf5a9a8",
    measurementId: "G-WQTXY3DMSY"
};

firebase.initializeApp(firebaseConfig)
const db = firebase

export default db
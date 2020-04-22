var config = {
    apiKey: "AIzaSyD7SLV0Odl5fW70eLH92rWYS2BQD23Gfl0",
    authDomain: "my-first-project-89b82.firebaseapp.com",
    databaseURL: "https://my-first-project-89b82.firebaseio.com",
    projectId: "my-first-project-89b82",
    storageBucket: "my-first-project-89b82.appspot.com",
    messagingSenderId: "22682798280",
    appId: "1:22682798280:web:ddd20fd9abd58ce63ebdfd",
    measurementId: "G-ZFLWP0VMB9"
};
firebase.initializeApp(config);
firebase.analytics();

var db = firebase.firestore();

db.collection("books").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        document.querySelector('h1').textContent += doc.data().tytul;
        document.querySelector('#author').textContent += `${doc.data().imie_autora} ${doc.data().nazwisko_autora}`;
        document.querySelector('#genre').textContent += doc.data().gatunek;
        document.querySelector('#year').textContent += doc.data().rok;
        document.querySelector('#isbn').textContent += doc.data().isbn;
    });
});
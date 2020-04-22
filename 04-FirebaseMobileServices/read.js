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
        let newRow = document.querySelector('table').insertRow(-1);
        let newCell1 = newRow.insertCell(-1);
        let newCell2 = newRow.insertCell(-1);
        let newCell3 = newRow.insertCell(-1);
        let newCell4 = newRow.insertCell(-1);
        let newCell5 = newRow.insertCell(-1);
        let newCell6 = newRow.insertCell(-1);
        let title = document.createTextNode(doc.data().tytul);
        newCell1.appendChild(title);
        let author_name = document.createTextNode(doc.data().imie_autora);
        newCell2.appendChild(author_name);
        let author_surname = document.createTextNode(doc.data().nazwisko_autora);
        newCell3.appendChild(author_surname);
        let year = document.createTextNode(doc.data().rok);
        newCell4.appendChild(year);
        let genre = document.createTextNode(doc.data().gatunek);
        newCell5.appendChild(genre);
        let isbn = document.createTextNode(doc.data().isbn);
        newCell6.appendChild(isbn);
    });
});
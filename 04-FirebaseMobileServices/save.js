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
var inputElement = document.querySelector("input");
var fr = new FileReader();

document.querySelector("button").onclick = function() {
    var file = inputElement.files;
    fr.onload = function(e) {
        var result = JSON.parse(e.target.result);
        result.forEach(function(item) {
            db.collection("books").add({
                gatunek: item.gatunek,
                imie_autora: item.imie_autora,
                nazwisko_autora: item.nazwisko_autora,
                isbn: item.isbn,
                rok: item.rok,
                tytul: item.tytul
            });
        });
    }

    fr.readAsText(file.item(0));
}
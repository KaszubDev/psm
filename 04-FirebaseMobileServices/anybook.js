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

function add_book() {
    db.collection("books").add({
        gatunek: document.querySelector('#genre').value,
        imie_autora: document.querySelector('#author_name').value,
        nazwisko_autora: document.querySelector('#author_surname').value,
        isbn: document.querySelector('#isbn').value,
        rok: document.querySelector('#year').value,
        tytul: document.querySelector('#title').value
    });
    document.querySelector('.added_item').style.display = "block";
    document.querySelector('h3').innerHTML = "Do bazy danych dodano nową książkę!";
    db.collection("books").get().then((item) => {
        item.forEach((book) => {
            if (book.data().tytul == document.querySelector("#title").value) {
                document.querySelector("h4:nth-of-type(1)").textContent += book.data().tytul;
                document.querySelector("h4:nth-of-type(2)").textContent += `${book.data().imie_autora} ${book.data().nazwisko_autora}`;
                document.querySelector("h4:nth-of-type(3)").textContent += book.data().gatunek;
                document.querySelector("h4:nth-of-type(4)").textContent += book.data().rok;
                document.querySelector("h4:nth-of-type(5)").textContent += book.data().isbn;
            }
        });
    });
}
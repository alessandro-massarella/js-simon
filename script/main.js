// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


// CREO 5 NUMERI CASUALI DIVERSI

var min = 1;
var max = 10;

var quantitaNumeri = 5;
var randomArray = [];

while (randomArray.length < quantitaNumeri) {
  var numeroRandom = Math.floor(Math.random() * max) + min;
  if (!randomArray.includes(numeroRandom));
    randomArray.push(numeroRandom);
}
alert(randomArray);

var numeriUser = [];


setTimeout (myFunction, 3000);

function myFunction() {
  for (var i = 0; i < 5; i++) {
  var dgtNumber = parseInt(prompt('inserisci i numeri UNO alla volta'));
  numeriUser.push(dgtNumber);
  }
}

console.log('numeri utente', numeriUser);
console.log('numeri computer', randomArray);

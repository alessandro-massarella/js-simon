// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


// CREO 5 NUMERI CASUALI DIVERSI

var min = 1;
var max = 10;

var quantitaNumeri = 5;
var randomArray = [];
var winner = [];

var i = 0;
while (i < quantitaNumeri) {
  var numeroRandom = Math.floor(Math.random() * max) + min;
  if (!randomArray.includes(numeroRandom)) {
    (randomArray).push(numeroRandom);
    i++;
  }
}
alert(randomArray);



setTimeout (faseUno, 3000);

var numeriUser = [];

function faseUno() {
  for (var i = 0; i < 5; i++) {
  var dgtNumber = parseInt(prompt('inserisci i numeri UNO alla volta'));
  numeriUser.push(dgtNumber);
  }

  // confronto i due array. Creo un terzo array in cui inserire i numeri uguali che poi mostrerò all'utente
  for (var i = 0; i < randomArray.length; i++) {
    if(randomArray[i] === numeriUser[i]) {
      winner.push(numeriUser[i]);
    }
  }
  console.log(winner);
  alert('i numeri indovinati sono: ' + winner);
  alert('hai indovinato ' + winner.length + ' numeri')
}


console.log('numeri utente', numeriUser);
console.log('numeri computer', randomArray);

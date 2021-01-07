/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var parola = prompt('Inserisci una parola');

function palindroma(word) {

  if (word.length %2 === 0){
    alert('la parola' + word + ' è palindroma');
  } else {
    alert('la parola' + word + ' non è palindroma');
  }
}

palindroma(parola);

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

    //dichairazione varibili
var pariDispari = prompt('pari o dispari?');
var numero;
var bool = false;
var bool1 = -1;
var rnd;

    //inserimento e controllo del numero dell'utente
    do {
      if(pariDispari === 'pari'){
        bool1 = 0;
      } else if (pariDispari === 'dispari') {
        bool1 = 1;
      } else {
        alert('Hai inserito un valore diverso da pari/dispari. Riprova!')
        bool1 = -1;
      }
    } while(bool1 === -1);

do {
  numero = prompt('inserisci un numero da 1 a 5');
  if (numero < 1 || numero > 5){
   alert('il numero che hai inserito non rientra fra l\'1 e il 5')
 } else {
   bool = true;
 }
} while (bool === false);

    //creazione numero randomico del computer tramite una funzione
function numeroRandom () {
 return  random = Math.floor(Math.random() * (5 + 1 - 1) + 1);
}
var rnd = numeroRandom();

var somma = random + numero;

function pariODispari(somma) {
  if(bool1 === 0){
    if (somma %2 === 0){
      alert('Hai vinto');
    }
  }
}

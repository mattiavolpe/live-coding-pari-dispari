/*
Pari o dispari
Chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
*/

// Strumenti
// prompt
// const / let
// Math.random + Math.floor
// if/else
// console.log
// % operatore modulo

// chiedere all'utente se vuole pari o dispari
const choice = prompt("Pari o dispari?");
console.log(choice);

if (choice != "pari" && choice != "dispari" ) {
  alert("ERRORE. Il valore deve essere pari o dispari");
}

// e un numero intero compreso tra 1 e 9.
const playerNumber = Math.floor(Number(prompt("Dammi un numero da 1 a 9")));
console.log(playerNumber);

if (playerNumber < 1 || playerNumber > 9 ) {
  alert("ERRORE. Il valore deve essere compreso tra 1 e 9 inclusi");
}

// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer.
const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcNumber);

// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.
const sum = playerNumber + pcNumber;
let result;
if (sum % 2 === 0) {
  result = "pari";
} else {
  result = "dispari";
}

if (result === choice) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}

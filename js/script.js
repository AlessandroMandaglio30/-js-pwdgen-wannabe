
//===== variabili dati

let myName = prompt('Inserisci il tuo nome');
document.getElementById('myName').innerHTML = myName;
console.log(myName);

let lastName = prompt('Inserisci il tuo cognome');
document.getElementById('lastName').innerHTML = lastName;
console.log(lastName);

let Col = prompt('Inserisci il tuo colore preferito');
document.getElementById('Col').innerHTML = Col;
console.log(Col);

// ======generatore pw 

const pwGenerata = myName + lastName + Col + 21;
document.getElementById('pwGenerata').innerHTML = pwGenerata;
console.log(pwGenerata);


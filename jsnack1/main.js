//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

let somma, numbers

somma = 0

for (let i = 0; i < 5; i++) {
  let numbers = Number(prompt ('digita un numero'))
  somma = numbers + somma;
  
}
console.log(somma);

// while

let somma, numbers

somma = 0

let i = 0
while (i < 5) {
let numbers = Number(prompt ('digita un numero'))
somma = numbers + somma;


i++
    
}
console.log(somma);
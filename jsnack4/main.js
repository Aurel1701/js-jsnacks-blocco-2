//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const number = [22,3,7,20,1,18]

let risultato = 0
console.log(number);
for (let i = 0; i < number.length; i++) {
    console.log(i);
    if (i % 2 !== 0) {
        risultato = number[i] + risultato
         

    }

}

console.log(risultato);

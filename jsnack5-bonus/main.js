//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let nome =['Marco', 'Luigi', 'Goku']

const cognome =['Lapomarda', 'Rossi', 'Bianco', 'Diamanti', 'Perin']

 let i = nome.length


while (i < cognome.length) {
    

  nome.push('Stefano');

  i++
    
}

console.log(nome);
console.log(cognome);
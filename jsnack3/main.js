//Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const nome =['Marco', 'Luigi', 'Goku', 'Vegeta']

const cognome =['Lapomarda', 'Rossi', 'Bianco', 'Diamanti']

for (let i = 0; i < nome.length; i++) {
    let nome_fake = Math.floor(Math.random() * 4);
    let cognome_fake = Math.floor(Math.random() * 4);
    console.log('personaggio :' + i);
    console.log(nome[nome_fake]);
    console.log(cognome[cognome_fake]);
    
}
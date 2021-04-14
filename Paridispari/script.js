//L’utente sceglie pari o dispari
var sceltaUtente = prompt("Pari o dispari?");
//validare
sceltaUtente = sceltaUtente.toLowerCase();


//l'utente inserisce un numero da 1 a 5. 
var numeroUtente = parseInt(prompt("scegli un numero da uno a 5"))
console.log(numeroUtente);
//validare

//Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
function rng(numero) {
    return Math.ceil(Math.random()*5)
}

var numeroComputer = rng(numeroComputer);

console.log(numeroComputer);  

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
function desPair(n1, n2) {
    var risultato = n1 + n2;
    var pari = (risultato % 2) === 0;
    
    if (pari) {
        return showDown = "pari";
        
    } else {
        return showDown = "dispari";
    }
}

//Dichiariamo chi ha vinto.

var somma = desPair(numeroUtente, numeroComputer);
console.log(somma)



if (showDown === sceltaUtente) {
    console.log("vince l'utente")

} else {
    console.log("Vince il pc")
}

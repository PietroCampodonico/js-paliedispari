/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


var inputUtente = prompt("Inserisci una parola e ti saprò dire se è un palindromo!");
//validare 

function isthispalindrome(word) {

    var match = true;
    
    for (var i = 0; i < word.length; i++) {
    
            if (word[i] !== word[word.length -1 -i]) {
                
                match=false;
            }
    }

    if (match) {
    return "palindromo";
    } else {
        return "non palindromo";
    }
}

document.writeln(isthispalindrome(inputUtente))




/*
NAIVE PATTERN RECOGNITION
    * 
 * Data una stringa di caratteri tra "a" e "z", trovare, se esiste, una sotto - stringa in
 * "i topi non avevano nipoti"
    * che contiene la stringa data.Restituire l'indice di inizio della sottostringa, altrimenti -1.
        * 
 * Test
        * A)
 * Input: "non"
    * Output: 7
        * 
 * B)
 * Input: "zzzzz"
    * Output: -1
        * 
 * Bonus
        * Aggiungere ai caratteri ammissibili il punto "." che rappresenta un qualsiasi altro carattere e
            * gestire il suo significato
                * /
// INPUT
var testo = "i topi non avevano nipoti";
var pattern = prompt('Inserire pattern');
// ELABORAZIONE
// inizializzo le variabili "memoria"
var indice = -1; // conterra' il risultato dell'elaborazione
var matchConPattern; // conterra' il numero dei match tra pattern e testo (per ogni iterazione)
//finche' ho del testo da controllare e non ho trovato un indice di corrispondenza
for (var i = 0; i < testo.length; i++) {
    //finche ho dei caratteri da controllare 
    matchConPattern = 0
    for (var j = 0; j < pattern.length; j++) {
        // se i caratteri combaciano
        if (testo[i + j] === pattern[j]) {
            //aumento il numero dei match
            matchConPattern++
        }
    }
    //se tutti i gli elementi del pattern hanno trovato corrispondenza con gli elementi del teso
    if (matchConPattern === j) {
        //successo! aggiorno l'indice (ne tengo memoria per dopo)
        indice = i
    }
}
//OUTPUT
console.log(indice)*/
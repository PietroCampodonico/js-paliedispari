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





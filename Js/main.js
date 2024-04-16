let nome = prompt("inserisci il tuo nome");
let cognome = prompt("inserisci il tuo cognome");
let colore = prompt("inserisci il tuo colore preferito");

let password = "La tua password è: " + nome + cognome + colore + "#24";
alert(password);

document.getElementById("text").innerHTML = password;
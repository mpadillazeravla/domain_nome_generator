/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

// window.onload = function() {
//write your code here
// console.log("Hello Rigo from the console!");
//};

let pronoun = ["the", "our"];
let adj = ["great", "big", "white"];
let noun = ["jogger", "racoon", "website"];
let extension = [".com", ".es", ".org"];

// Hacemos un bucle anidado para hacer console.log de todas las posibilidades
let domain = "";
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        domain = pronoun[i] + adj[j] + noun[k] + extension[l];
        console.log(domain);
      }
    }
  }
}

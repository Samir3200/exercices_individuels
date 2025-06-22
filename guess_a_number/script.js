


// Étape 1
function givenNumber(nombre) {
  return nombre
}




let nombreADeviner = 20;
let essais = 0;
 //Étape 2
function didIWin(givenNumber) {
  if (givenNumber < nombreADeviner) {
    alert("Plus petit !");
    return false;
  } else if (givenNumber > nombreADeviner) {
    alert("Plus grand !");
   return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  }
}
console.log(didIWin(20))


// Étape 3
function gamePlay() {
  let trouve = false;
  while (!trouve) {
    const guess = demanderNombre();
    trouve = verifierNombre(guess);
  }
}

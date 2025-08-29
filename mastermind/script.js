const couleursPossibles = ["red", "blue", "green", "yellow"]
const conteneurBoutons = document.getElementById("color-buttons")
let proposition = []
let essais = 12
colorFixed = ["blue", "red"]

couleursPossibles.forEach(couleur => {
    const bouton = document.createElement("button")
    bouton.className = "color-button"
    bouton.style.backgroundColor = couleur

    bouton.addEventListener("click", () => {
        if (proposition.length < 2 && !proposition.includes(couleur)) {
            proposition.push(couleur)
            mettreAJourAffichage()
        }
    })
    conteneurBoutons.appendChild(bouton)
})

function mettreAJourAffichage() {

    const zoneProposition = document.getElementById("current-proposition");
    zoneProposition.innerHTML = ""

    proposition.forEach(couleur => {
        const cercle = document.createElement("div")
        cercle.className = "circle"
        cercle.style.backgroundColor = couleur
        zoneProposition.appendChild(cercle)
    })
}

const message = document.getElementById("message")
const boutonValider = document.getElementById("valider")
const compteurEssais = document.getElementById("essais")


boutonValider.addEventListener("click", () => {
    if (proposition.length !== 2) {
        message.innerText = "Veuillez choisir 2 couleurs.";
        return;
    }

    if (proposition[0] === colorFixed[0] && proposition[1] === colorFixed[1]) {
        message.innerText = " Vous avez réussi !"
        boutonValider.disabled = true
        return
    }

    essais--
    compteurEssais.innerText = `Essais restants : ${essais}`

    if (essais === 0) {
        message.innerText = ` Vous avez perdu. La bonne combinaison était : ${colorFixed.join(", ")}`;
        boutonValider.disabled = true;
    } else {
        message.innerText = " Mauvaise combinaison, réessayez.";
    }
});


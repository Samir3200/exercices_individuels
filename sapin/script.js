
//Afficher les étoiles
function afficherEtoiles(n) {
    let stars = '*'.repeat(n);
    console.log(stars);
}
afficherEtoiles(2)
afficherEtoiles(5)


//Afficher le nombre d'étoiles par rangées
function afficherRectangle(height, width) {
    for (let i = 0; i < height; i++) {
        afficherEtoiles(width);
    }
}
afficherRectangle(4, 6)


// Afficher la barre oblique coté droit
function afficherTriangleDroite(n) {

    for (let i = 0; i < n; i++) {
        let backSlach = '*'.repeat(i) + '\\'
        console.log(backSlach)
    }
}
afficherTriangleDroite(5)


//Afficher la barre oblique coté gauche
function afficherTriangleGauche(n) {

    for (let i = 0; i < n; i++) {
        let spaces = ' '.repeat(n - i - 1);
        let stars = '*'.repeat(i);
        let slach = spaces + '/' + stars;
        console.log(slach);
    }
}
afficherTriangleGauche(5)


//Afficher l'étoile plus le tronc central
function afficherPointeSapin(height) {
    let summit = ' '.repeat(height) + '+';
    console.log(summit);
    for (let i = 0; i < height; i++) {
        let spaces = ' '.repeat(height - i - 1);
        let left = '/' + '*'.repeat(i);
        let trunk = '|';
        let right = '*'.repeat(i) + '\\';
        let line = spaces + left + trunk + right;
        console.log(line);
    }
}
afficherPointeSapin(1)
afficherPointeSapin(2)
afficherPointeSapin(3);



//Afficher les étages
function afficherEtage(height, tip_offset, spacing) {
    for (let i = tip_offset; i < height; i++) {
        let spaces = ' '.repeat(spacing + height - i - 1);
        let left = '/' + '*'.repeat(i);
        let trunk = '|';
        let right = '*'.repeat(i) + '\\';
        console.log(spaces + left + trunk + right);
    }
}
afficherEtage(3, 0, 3);
afficherEtage(3, 1, 2);
afficherEtage(3, 2, 1);
afficherEtage(3, 3, 0);



//Afficher le sapin "complet"
function afficherSapin(floor, height_floor) {
    let totalHeight = height_floor + floor - 1; 
    let summit = ' '.repeat(totalHeight) + '+';
    console.log(summit);
    for (let i = 0; i < floor; i++) {
        let offset = i;
        let spacing = floor - i - 1;
        afficherEtage(height_floor + i, offset, spacing);
    }
}
afficherSapin(3, 3);






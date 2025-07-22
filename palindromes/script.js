// Vérifie si une date est bien écrite et qu'elle existe
function isValidDate(dateStr) {
    const [d, m, y] = dateStr.split('/').map(Number);
    if (d < 1 || d > 31) return false                   // limite pour les jours
    if (m < 1 || m > 12) return false                   // limite pour les mois
    if (y < 1000 || y > 9999) return false;             // limite pour les années

    const date = new Date(y, m - 1, d);
    return (
        date.getFullYear() === y &&
        date.getMonth() + 1 === m &&
        date.getDate() === d
    );
}
// test de plusieurs dates
console.log(isValidDate("29/02/2024")); // true
console.log(isValidDate("31/11/2023")); // false
console.log(isValidDate("15/13/2023")); // false
console.log(isValidDate("01/01/999"));  // false

// Vérifie si une date est un palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
// Vérifie si une date est valide et palindrome
function isDatePalindrome(dateStr) {
    if (!isValidDate(dateStr)) return false;
    const clean = dateStr.replace(/\//g, '');
    return isPalindrome(clean);
}
// Donne les X prochaines dates palindromes à partir d’aujourd’hui
function getNextPalindromes(x) {
    const result = [];
    let date = new Date();

    while (result.length < x) {
        const d = String(date.getDate()).padStart(2, '0');
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const y = date.getFullYear();
        const str = `${d}/${m}/${y}`;

        if (isDatePalindrome(str)) {
            result.push(str);
        }
        date.setDate(date.getDate() + 1); // passe au jour palindrome suivant
    }
    return result;
    
}  // testé sur le DOM

// Affiche les résultats dans la page
function afficherPalindromes() {
    const nb = Number(document.getElementById('nb').value);
    const dates = getNextPalindromes(nb);
    document.getElementById('resultat').innerHTML =
        "<ul>" + dates.map(d => `<li>${d}</li>`).join('') + "</ul>";
}

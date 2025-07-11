
const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    ' ' : '_',
}

// Etape 1 :
function getLatinCharacterList(texte) {
    return texte.split('');                 // suppression des séparateurs
}
const inputText = "Hello, world";
const result = getLatinCharacterList(inputText);
// vérification :
console.log(result);


//Etape 2 : De caractères à morses
function translateLatinCharacter(char) {
    const upperChar = char.toUpperCase();
    return latinToMorse[upperChar] || '';
}
console.log(translateLatinCharacter("a"))



// Etape 3 :
function encode(texte) {
    let morseCode = '';
    let i = 0;
    while (i < texte.length) {
        const morseChar = translateLatinCharacter(texte[i]);
        if (morseChar !== '') {
            morseCode += morseChar + ' '; // permet de créer un espace entre chaque code morse
        }
        i++;
    }
    return morseCode.trim();
}
// Test 
const message = "Morse Code";
const resultat = encode(message);
console.log(resultat);




// Etape 4 :
const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",
    '_' : " ",
}   

// Fonction de l'étape 1 :
function getMorseCharacterList(morseText) {
    return morseText.trim().split(' ');
}
// Fonction de l'étape 2 :
function translateMorseCharacter(morseChar) {
    const upperChar = morseChar.toUpperCase();  // Pas obligatoire car dans l'annexe, les lettres sont en majuscule.
    return morseToLatin[morseChar] || '';
}
// Fonction decode avec la boucle while :
function decode(morseText) {
    const morseList = getMorseCharacterList(morseText);
    let decodeText = '';
    let i = 0;
    while (i < morseList.length) {
        const latinChar = translateMorseCharacter(morseList[i]);
        decodeText += latinChar;
        i++;
    }
    return decodeText;
}
console.log(decode("-- --- .-. ... . -.-. --- -.. .")); // Test (résultat = MORSECODE)




document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('morse');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const inputText = document.getElementById('saisie').value;
        const morseCode = encode(inputText);

        document.getElementById('code').value = morseCode;
    });
});
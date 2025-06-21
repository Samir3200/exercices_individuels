
// ETAPE 1
/*let message = "Bonjour !"
console.log(message)*/


// ETAPE 2
let firstname = "Beyonce"
let message = (`Bonjour ! ${firstname}`)
console.log(message)



// ETAPE 3
function sayHello() {
let firstname = "Beyonce"
let message = (`Bonjour ! ${firstname}`)
console.log(message)
}
sayHello()


// ETAPE 4
function sayHello(firstname,hour) {
    if (hour>=18) {
        console.log( `Bonsoir ${firstname}`)
    } else {
        console.log (`Bonjour ${firstname}`)
    }
}
sayHello(`Beyonce !`,11)
sayHello(`Beyonce !`,18)
sayHello(`Beyonce !`,17)

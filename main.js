// var info = {
//     nombre: 'Nataly',
//     age: 25,
//     city: 'AQP'
// }

// function mayuscula({ nombre }) {
//     console.log(nombre.toUpperCase());
// }

// mayuscula(info);
// mayuscula({ nombre: 'Anthony' })


// CONDITIONALS

var nataly = {
    nombre: "Nataly",
    apellido: "Paz",
    edad: 25,
    engineeer: false,
    developer: true,
    dj: false,
    reading: true,
    weight: 82

}

function profesion(persona) {
    console.log(`${persona.nombre} is:`)
    if (persona.engineeer) {
        console.log('Engineer')
    }
    else {
        console.log('not engineer')
    }
    if (persona.developer) {
        console.log('Developer')
    }
    if (persona.dj) {
        console.log('DJ')
    }
    if (persona.reading) {
        console.log('Reading')
    }
}
// profesion(nataly)


const ADULT = 18;

// function isAdult(persona) {
//     return persona.edad >= ADULT
// }

// const isAdult = function (persona) {
//     return persona.edad >= ADULT
// }

// const isAdult = persona => persona.edad >= ADULT

const isAdult = ({ edad }) => edad >= ADULT

function printIfAdult(persona) {
    console.log()
    if (isAdult(persona)) {
        console.log(`${persona.nombre} is adult`)
    }
    else {
        console.log(`${persona.nombre} is younger`)
    }
}
// printIfAdult(nataly)


// function allowAccess(persona) {
//     if (!isAdult(persona)) {
//         console.log('Access denied')
//     }
// }

const allowAccess = ({ edad }) => !isAdult({ edad }) ? console.log('ACCESS DENIED') : console.log('ALLOW ACCESS')
const isDeveloper = ({ developer }) => nataly.developer ? console.log('IS DEVELOPER') : console.log(`ISN'T DEVELOPER`)








// REPETITIVE STRUCTURES: FOR
console.log(`Al inicio del año ${nataly.nombre} pesa ${nataly.weight} kg`)

const INCREASED_WEIGHT = 0.2
const DAYS_YEAR = 365

const weightGain = persona => persona.weight += INCREASED_WEIGHT
const slim_down = persona => persona.weight -= INCREASED_WEIGHT

// for (var i = 1; i <= DAYS_YEAR; i++) {
//     var random = Math.random();
//     if (random < 0.25) {
//         weightGain(nataly)
//     } else if (random < 0.5) {
//         slim_down(nataly)
//     }
// }
//console.log(`Al final del año ${nataly.nombre} pesa ${nataly.weight.toFixed(1)} kg`)


// REPETITIVE STRUCTURES: WHILE
const eatALot = () => Math.random() < 0.3
const doesSport = () => Math.random() < 0.4
const GOAL = nataly.weight - 3
var days = 0
while (nataly.weight > GOAL) {
    if (eatALot()) {
        weightGain(nataly)
    }
    if (doesSport()) {
        slim_down(nataly)
    }
    days++
}
console.log(`Han pasado ${days} días para que ${nataly.nombre} baje 3kg.`)
//OOP: HOW CLASSES WORK IN JS
function Person(name, lastname, height) {
    this.name = name
    this.lastname = lastname
    this.height = height
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} ${this.lastname}`)
}
Person.prototype.isTall = function () {
    if (this.height > 1.65) {
        console.log('Is tall')
    } else {
        console.log('Is small')
    }
}
var nataly = new Person('Nataly', 'Paz', 1.66)
nataly.greet()
nataly.isTall()
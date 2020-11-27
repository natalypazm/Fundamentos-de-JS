//OOP: PROTOTYPE INHERITANCE
function inheritsFrom(childPrototype, parentPrototype) {
    var fn = function () { }
    fn.prototype = parentPrototype.prototype
    childPrototype.prototype = new fn
    childPrototype.prototype.constructor = childPrototype
}
//OOP: PROTOTYPE INHERITANCE

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
        console.log('I am tall')
    } else {
        console.log('I am not tall')
    }
}
var nataly = new Person('Nataly', 'Paz', 1.66)

nataly.greet()
nataly.isTall()


//OOP: PROTOTYPE INHERITANCE
function developer(name, lastname) {
    this.name = name
    this.lastname = lastname
}
developer.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} ${this.lastname} and I'm developer`)
}
//OOP: PROTOTYPE INHERITANCE
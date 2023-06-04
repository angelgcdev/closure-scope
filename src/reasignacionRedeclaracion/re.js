/**
 * REASIGNACIÓN Y REDECLARACIÓN
 */

var firstName; // Undefined
firstName = "Angel";
console.log(firstName);

var lastName = "Gutierrez"; // declaran / asignar
lastName = "Cantuta"; // reasignar
console.log(lastName);

var secondName = "Luis"; // declarar / asignar
var secondName = "Ana"; // redeclarar / reasignar
console.log(secondName);

/**LET
 * con let puedo reasignar pero no redeclarar
 */

let fruit = "Apple"; // declarar y asignar
fruit = "Kiwi";
console.log(fruit);
// let fruit = "Banana"; // no se puede redeclarar


/**
 * CONST
 * 
 */

const animal='dog'; // declarar y asignar
// animal='cat'; // no se puede reasignar
// const animal='monkey'; // no se puede redeclarar
console.log(animal);

const vehicles=[];
vehicles.push('Toyota');
vehicles.push('Toyota');
vehicles.push('Toyota');
vehicles.push('Toyota');

console.log(vehicles);

vehicles.pop();
console.log(vehicles);
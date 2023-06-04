/**
 * VARIABLES
 */

var a; //declaración
var b = "b"; //declaración / asignación
b = "bb"; //reasignación
var a = "aa"; //redeclaración

/**
 * GLOBAL SCOPE
 */

var fruit = "Apple"; //global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  
  country = "Colombia"; //variable Global implicitamente(si no se declara).
  console.log(country);
}

countries();
console.log(country);

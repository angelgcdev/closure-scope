/**Hoisting - elevación
 * si se declara con let o const ya no se aplica hoisting
 * y ya no le das tanto importancia
 * pero para los que siguen utilizando var como declaracion
 * por eso es necesario saber como se aplica al codigo,
 * para saber que errores podria causar no entenderlas.
 */

// console.log(nameOfDog);
// var nameOfDog = "Elmo";
// console.log(nameOfDog);


nameOfDog();

function nameOfDog(){
    console.log(`El mejo perrito es ${elmo}`);
}

var elmo='Tomasito';
/**Strict Mode */
'use strict'
pi=3.1416;
console.log(pi);//error en modo estricto porque no esta declarada la variable pi

function myFunction(){
    'use strict';
    return pi=3.141516;
}
console.log(myFunction());
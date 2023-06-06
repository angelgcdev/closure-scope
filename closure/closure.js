/**
 * CLOSURE EN JAVASCRIPT
 */

const myGloblal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGloblal);

  function parent() {
    const inner = 2;
    console.log(myNumber, myGloblal);

    function child() {
      console.log(inner, myNumber, myGloblal);
    }

    return child();
  }

  return parent();
}

myFunction();

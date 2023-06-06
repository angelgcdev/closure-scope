# CLOSURE - CLAUSURA

## ¿Que es?

* Se refiere a la combinación de una función y el entorno léxico en el que se declaró esa función.

Closure permite que una función acceda a las variables y parametros en su entorno de creación.

- Ejemplo:

```js
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

```

### Nota

- El uso excesivo de closure puede consumir memoria porque javascript mantiene activo esos espacios de memoria cuando se utiliza closure.

---
sidebar_position: 3
---

# Ejemplos

## Ejercicio 1: Introducción a Promesas en Cadena

Crea dos promesas simples que se ejecuten en secuencia. La primera promesa debe resolverse con un mensaje que diga "Primera promesa resuelta", y la segunda debe tomar este mensaje y agregar "y Segunda promesa resuelta". El objetivo es aprender cómo encadenar promesas para ejecutar operaciones de forma secuencial.

### Código de solución:

```js
// Primera promesa que se resuelve con un mensaje.
const primeraPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Primera promesa resuelta.");
  }, 1000);
});

// Encadenamos la segunda promesa.
primeraPromesa
  .then((resultado1) => {
    console.log(resultado1); // Imprime el resultado de la primera promesa.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${resultado1} y Segunda promesa resuelta.`);
      }, 1000);
    });
  })
  .then((resultado2) => {
    console.log(resultado2); // Imprime el resultado de la segunda promesa.
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%202/Ejemplo%201.png)

---

## Ejercicio 2: Encadenamiento con Transformaciones

Modifica el ejercicio anterior para que la segunda promesa realice una transformación del mensaje de la primera promesa, convirtiéndolo a mayúsculas. El objetivo es comprender cómo se puede manipular el resultado de una promesa en la cadena.

### Código de solución:

```js
// Primera promesa que se resuelve con un mensaje.
const primeraPromesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Primera promesa resuelta.");
  }, 1000);
});

// Encadenamos la segunda promesa que transforma el mensaje a mayúsculas.
primeraPromesa
  .then((resultado1) => {
    console.log(resultado1); // Imprime el resultado de la primera promesa.
    return new Promise((resolve) => {
      setTimeout(() => {
        // Transformamos el resultado a mayúsculas.
        resolve(resultado1.toUpperCase());
      }, 1000);
    });
  })
  .then((resultado2) => {
    console.log(`Mensaje transformado: ${resultado2}`); // Imprime el resultado transformado.
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%202/Ejemplo%202.png)

---

## Ejercicio 3: Encadenamiento con Condiciones

Crea una función que acepte un número y devuelva una promesa que se resuelva si el número es mayor que 10. Si es menor o igual, debe ser rechazada. Encadena una segunda promesa que verifique si el número es par y devuelve un mensaje correspondiente.

### Código de solución:

```js
// Función que verifica si el número es mayor que 10.
const verificarNumero = (numero) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero > 10) {
        resolve(`El número ${numero} es mayor que 10.`);
      } else {
        reject(`El número ${numero} no es mayor que 10.`);
      }
    }, 1000);
  });
};

// Encadenamos una segunda promesa para verificar si es par.
verificarNumero(12)
  .then((mensaje1) => {
    console.log(mensaje1); // Imprime si es mayor que 10.
    return new Promise((resolve) => {
      setTimeout(() => {
        // Verificamos si el número es par.
        if (12 % 2 === 0) {
          resolve(`El número ${12} es par.`);
        } else {
          resolve(`El número ${12} es impar.`);
        }
      }, 1000);
    });
  })
  .then((mensaje2) => {
    console.log(mensaje2); // Imprime si es par o impar.
  })
  .catch((error) => {
    console.error(error); // Manejo de errores si no es mayor que 10.
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%202/Ejemplo%203.png)

---

## Ejercicio 4: Encadenamiento con Errores

Extiende el ejercicio anterior para que una de las promesas falle. Modifica la segunda promesa para que verifique si el número es divisible entre 5 y que, en caso de serlo, devuelva un mensaje de éxito; de lo contrario, debe rechazar la promesa.

### Código de solución:

```js
// Función que verifica si el número es mayor que 10.
const verificarNumero = (numero) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero > 10) {
        resolve(`El número ${numero} es mayor que 10.`);
      } else {
        reject(`El número ${numero} no es mayor que 10.`);
      }
    }, 1000);
  });
};

// Encadenamos una segunda promesa para verificar si es divisible entre 5.
verificarNumero(12)
  .then((mensaje1) => {
    console.log(mensaje1); // Imprime si es mayor que 10.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verificamos si el número es divisible entre 5.
        if (12 % 5 === 0) {
          resolve(`El número ${12} es divisible entre 5.`);
        } else {
          reject(`El número ${12} NO es divisible entre 5.`);
        }
      }, 1000);
    });
  })
  .then((mensaje2) => {
    console.log(mensaje2); // Imprime si es divisible entre 5.
  })
  .catch((error) => {
    console.error(error); // Manejo de errores si no es mayor que 10 o no es divisible entre 5.
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%202/Ejemplo%204.png)

---

## Ejercicio 5: Uso de Datos de Entrada

Crea una función que acepte dos números y devuelva una promesa que resuelva con la suma de ambos si la suma es mayor que 10, o que se rechace con un mensaje indicando que es menor o igual a 10. Encadena otra promesa para verificar si la suma es un número par.

### Código de solución:

```js
// Función que suma dos números y verifica si la suma es mayor que 10.
const sumarNumeros = (num1, num2) => {
  return new Promise((resolve, reject) => {
    const suma = num1 + num2;
    setTimeout(() => {
      if (suma > 10) {
        resolve(suma);
      } else {
        reject(`La suma de ${num1} y ${num2} es ${suma}, menor o igual a 10.`);
      }
    }, 1000);
  });
};

// Encadenamos una segunda promesa para verificar si la suma es par.
sumarNumeros(5, 7)
  .then((resultado) => {
    console.log(`La suma es: ${resultado}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        if (resultado % 2 === 0) {
          resolve(`La suma ${resultado} es par.`);
        } else {
          resolve(`La suma ${resultado} es impar.`);
        }
      }, 1000);
    });
  })
  .then((mensaje) => {
    console.log(mensaje); // Imprime si la suma es par o impar.
  })
  .catch((error) => {
    console.error(error); // Manejo de errores si la suma es menor o igual a 10.
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%202/Ejemplo%205.png)

---

## Ejercicio 6: Encadenamiento con Lógica de Negocio

Crea una función que reciba un número y determine si es un número primo. La función debe devolver una promesa que se resuelva con el mensaje "El número X es primo" si lo es, o que se rechace con el mensaje "El número X no es primo" si no lo es. Encadena otra promesa que devuelva si el número es par o impar.

### Código de solución:

```js
// Función que verifica si un número es primo.
const esPrimo = (numero) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero < 2) {
        reject(`El número ${numero} no es primo.`);
        return;
      }
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          reject(`El número ${numero} no es primo.`);
          return;
        }
      }
      resolve(`El número ${numero} es primo.`);
    }, 1000);
  });
};

// Encadenamos una segunda promesa para verificar si es par o impar.
esPrimo(13)
  .then((mensaje1) => {
    console.log(mensaje1); // Imprime si es primo.
    return new Promise((resolve) => {
      setTimeout(() => {
        if (13 % 2 === 0) {
          resolve(`El número ${13} es par.`);
        } else {
          resolve(`El número ${13} es impar.`);
        }
      }, 1000);
    });
  })
  .then((mensaje2) => {
    console.log(mensaje2); // Imprime si es par o impar.
  })
  .catch((error) => {
    console.error(error); // Manejo de errores si no es primo.
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%202/Ejemplo%206.png)

---

## Ejercicio 7: Manejo de Varios Resultados

Crea una función que acepte un array de números y devuelva una promesa que resuelva con un array que contenga solo los números que son mayores a 5. Encadena otra promesa que calcule la suma de esos números y la devuelva.

### Código de solución:

```js
// Función que filtra los números mayores a 5.
const filtrarNumerosMayores = (numeros) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtrados = numeros.filter(num => num > 5);
      resolve(filtrados);
    }, 1000);
  });
};

// Encadenamos una segunda promesa para calcular la suma.
filtrarNumerosMayores([1, 3, 5, 6, 8, 10])
  .then((numerosFiltrados) => {
    console.log(`Números filtrados: ${numerosFiltrados}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        const suma = numerosFiltrados.reduce((acc, curr) => acc + curr, 0);
        resolve(suma);
      }, 1000);
    });
  })
  .then((sumaTotal) => {
    console.log(`La suma de los números filtrados es: ${sumaTotal}`);
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%202/Ejemplo%207.png)

---

## Ejercicio 8: Encadenamiento Complejo

Imagina que estás desarrollando una aplicación para realizar pedidos en línea. Crea un sistema que simule el proceso de hacer un pedido que incluye tres pasos: primero, calcular el total de un pedido, luego verificar el stock de los artículos y, finalmente, procesar el pago. Devuelve un mensaje en cada etapa del proceso para indicar el resultado.

### Código de solución:

```js
// Función que simula el cálculo del total del pedido.
const calcularTotal = (articulos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = articulos.reduce((acum, item) => acum + item.precio * item.cantidad, 0);
      resolve(`Total del pedido: $${total.toFixed(2)}`);
    }, 1000);
  });
};

// Función que simula la verificación del stock.
const verificarStock = (articulos) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const stockSuficiente = articulos.every(item => item.cantidad <= item.stock);
      if (stockSuficiente) {
        resolve('Stock verificado: suficiente para procesar el pedido.');
      } else {
        reject('Stock insuficiente para uno o más artículos.');
      }
    }, 1000);
  });
};

// Función que simula el procesamiento del pago.
const procesarPago = (total) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Pago procesado por un total de: $${total.toFixed(2)}`);
    }, 1000);
  });
};

// Datos de ejemplo de artículos en el pedido.
const articulos = [
  { nombre: "Camiseta", precio: 20.00, cantidad: 2, stock: 5 },
  { nombre: "Pantalones", precio: 40.00, cantidad: 1, stock: 3 },
];

// Encadenamos las promesas para el proceso de pedido.
calcularTotal(articulos)
  .then((mensajeTotal) => {
    console.log(mensajeTotal); // Imprime el total del pedido.
    const total = parseFloat(mensajeTotal.split('$')[1]);
    return verificarStock(articulos).then(() => total); // Verifica el stock y pasa el total.
  })
  .then((total) => {
    return procesarPago(total); // Procesa el pago.
  })
  .then((mensajePago) => {
    console.log(mensajePago); // Imprime el resultado del pago.
  })
  .catch((error) => {
    console.error(error); // Manejo de errores en cualquier parte del proceso.
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%202/Ejemplo%208.png)
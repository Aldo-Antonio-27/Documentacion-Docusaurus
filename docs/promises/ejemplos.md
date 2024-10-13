---
sidebar_position: 3
---

# Ejemplos

## Ejercicio 1: Crear una Promesa Simple

Crea una promesa que se resuelva después de 2 segundos con el mensaje "Promesa resuelta". Utiliza el método .then() para manejar el resultado y mostrarlo en la consola. El objetivo es entender el funcionamiento básico de las promesas y cómo se manejan los resultados una vez que se resuelven.

### Código de solución:

```js
// Creamos una promesa que se resuelve después de 2 segundos.
const promesaSimple = new Promise((resolve) => {
  setTimeout(() => {
    // Resolvemos la promesa con el mensaje "Promesa resuelta"
    resolve("Promesa resuelta exitosamente después de 2 segundos.");
  }, 2000);
});

// Usamos .then() para manejar el resultado de la promesa.
promesaSimple.then((resultado) => {
  console.log(resultado); // Muestra el resultado en la consola
});
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%201/Ejemplo%201.png)

---

## Ejercicio 2: Promesa con Rechazo

Crea una promesa que simule una operación que puede tener éxito o fallar. Si la operación tiene éxito, la promesa debe resolverse con el mensaje "Operación exitosa", de lo contrario, debe rechazarse con el mensaje "Operación fallida". Usa .catch() para manejar el error en caso de que la promesa se rechace.

### Código de solución:

```js
// Creamos una promesa que puede tener éxito o fallar.
const promesaConRechazo = new Promise((resolve, reject) => {
  const exito = false; // Cambia a true para simular el éxito

  if (exito) {
    resolve("Operación exitosa.");
  } else {
    reject("Operación fallida.");
  }
});

// Manejo del resultado con .then() y .catch().
promesaConRechazo
  .then((resultado) => {
    console.log(resultado); // Muestra el éxito si exito es true
  })
  .catch((error) => {
    console.error(error); // Muestra el error si exito es false
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%201/Ejemplo%202.png)

---

## Ejercicio 3: Encadenamiento de Promesas

Simula tres tareas asíncronas utilizando promesas. Cada tarea debe completarse en secuencia, una tras otra. Cada tarea debe mostrar un mensaje indicando que ha sido completada. El objetivo es aprender a encadenar promesas y ejecutar operaciones secuencialmente.

### Código de solución:

```js
// Función que simula una tarea asíncrona con un nombre y tiempo.
const tareaAsincrona = (nombre, tiempo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${nombre} completada en ${tiempo / 1000} segundos.`);
    }, tiempo);
  });
};

// Encadenamos las promesas para que se ejecuten una tras otra.
tareaAsincrona("Tarea 1", 1000)
  .then((resultado1) => {
    console.log(resultado1); // Tarea 1 completada después de 1 segundo
    return tareaAsincrona("Tarea 2", 2000);
  })
  .then((resultado2) => {
    console.log(resultado2); // Tarea 2 completada después de 2 segundos
    return tareaAsincrona("Tarea 3", 1000);
  })
  .then((resultado3) => {
    console.log(resultado3); // Tarea 3 completada después de 1 segundo
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%201/Ejemplo%203.png)

---

## Ejercicio 4: Uso de Promise.all

Crea tres promesas que simulen tareas asíncronas y ejecútalas en paralelo usando Promise.all. Cada tarea debe completarse después de un tiempo diferente. El objetivo es mostrar cómo Promise.all espera a que todas las promesas se completen antes de devolver el resultado.

### Código de solución:

```js
// Función que simula una tarea asíncrona.
const tarea = (nombre, tiempo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${nombre} completada en ${tiempo / 1000} segundos.`);
    }, tiempo);
  });
};

// Usamos Promise.all para ejecutar todas las tareas al mismo tiempo.
Promise.all([tarea("Tarea 1", 1000), tarea("Tarea 2", 2000), tarea("Tarea 3", 1500)])
  .then((resultados) => {
    console.log("Todas las tareas han sido completadas:");
    resultados.forEach((resultado) => console.log(resultado)); // Imprimimos cada resultado
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%201/Ejemplo%204.png)

---

## Ejercicio 5: Manejo de Errores con Promise.all

Modifica el ejercicio anterior para que una de las promesas falle. Aprende cómo Promise.all maneja los errores cuando una promesa es rechazada. Si una promesa falla, el resultado debe ser el mensaje de error correspondiente.

### Código de solución:

```js
// Función que puede fallar o tener éxito.
const tareaConError = (nombre, tiempo, debeFallar = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (debeFallar) {
        reject(`${nombre} falló después de ${tiempo / 1000} segundos.`);
      } else {
        resolve(`${nombre} completada en ${tiempo / 1000} segundos.`);
      }
    }, tiempo);
  });
};

// Ejecutamos varias promesas, una de ellas fallará.
Promise.all([
  tareaConError("Tarea 1", 1000),
  tareaConError("Tarea 2", 2000, true), // Esta promesa fallará
  tareaConError("Tarea 3", 1500)
])
  .then((resultados) => {
    console.log("Todas las tareas completadas:");
    resultados.forEach((resultado) => console.log(resultado));
  })
  .catch((error) => {
    console.error("Error detectado:", error); // Manejamos el error
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%201/Ejemplo%205.png)

---

## Ejercicio 6: Uso de Promise.race

Utiliza Promise.race para ejecutar varias promesas al mismo tiempo y obtener el resultado de la primera que se complete. Simula tres tareas con diferentes tiempos de ejecución y observa cuál de ellas termina primero.

### Código de solución:

```js
// Función que simula una tarea rápida con diferentes tiempos.
const tareaRapida = (nombre, tiempo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${nombre} completada en ${tiempo / 1000} segundos.`);
    }, tiempo);
  });
};

// Usamos Promise.race para obtener el resultado de la primera tarea completada.
Promise.race([tareaRapida("Tarea 1", 3000), tareaRapida("Tarea 2", 1000), tareaRapida("Tarea 3", 2000)])
  .then((resultado) => {
    console.log("Primer resultado obtenido:", resultado); // Imprimimos solo el primer resultado
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%201/Ejemplo%206.png)

---

## Ejercicio 7: Promesa Encapsulada en Función

Crea una función que acepte un número y devuelva una promesa. Si el número es par, la promesa debe resolverse con un mensaje indicando que el número es par. Si es impar, debe rechazarse con un mensaje indicando que el número es impar.

### Código de solución:

```js
// Función que devuelve una promesa según si el número es par o impar.
const comprobarNumero = (numero) => {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve(`El número ${numero} es par.`);
    } else {
      reject(`El número ${numero} es impar.`);
    }
  });
};

// Probamos la función con un número par e impar.
comprobarNumero(4)
  .then((mensaje) => {
    console.log(mensaje); // Imprime si es par
  })
  .catch((error) => {
    console.error(error); // Imprime si es impar
  });

comprobarNumero(7)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%201/Ejemplo%207.png)

---

## Ejercicio 8: Encadenamiento con Condicionales

Crea una función que acepte un número y devuelva una promesa. La promesa debe resolverse si el número es mayor o igual a 10, y debe rechazarse si el número es menor a 10. Posteriormente, encadena una segunda promesa para verificar si el número es divisible entre 5, devolviendo un mensaje adicional.

### Código de solución:

```js
// Función que verifica si el número es mayor o igual a 10.
const verificarCondicion = (numero) => {
  return new Promise((resolve, reject) => {
    if (numero >= 10) {
      resolve(`Valor aceptado: ${numero}`);
    } else {
      reject(`Valor demasiado bajo: ${numero}`);
    }
  });
};

// Encadenamos otra promesa para verificar si es divisible entre 5.
verificarCondicion(15)
  .then((mensaje) => {
    console.log(mensaje); // Se imprime si pasa la primera condición
    if (15 % 5 === 0) {
      return "El número es divisible entre 5.";
    }
    return "El número no es divisible entre 5.";
  })
  .then((mensajeDivisible) => {
    console.log(mensajeDivisible); // Resultado de la segunda condición
  })
  .catch((error) => {
    console.error(error); // Se imprime si no cumple la primera condición
  });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%201/Ejemplo%208.png)
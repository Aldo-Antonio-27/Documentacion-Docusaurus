---
sidebar_position: 3
---

# Ejemplos

## Ejercicio 1: Promesa Simple

Crea una promesa que se resuelva después de 2 segundos y utiliza Promise.race para manejarla. Imprime un mensaje en la consola una vez que la promesa se haya resuelto.

### Código de solución:

```js
// Creamos una promesa que se resolverá después de 2 segundos
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 1 resuelta después de 2 segundos.");
    }, 2000);
});

// Usamos Promise.race para manejar la promesa
Promise.race([promise1]).then((result) => {
    console.log(result); // Imprimimos el resultado
});
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%204/Ejemplo%201.png)

---

## Ejercicio 2: Primer Resultado Ganador

Crea dos promesas, donde una se resuelva después de 1 segundo y la otra después de 3 segundos. Usa Promise.race para mostrar el resultado de la promesa que se resuelva primero.

### Código de solución:

```js
// Definimos dos promesas
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 1 (1 segundo).");
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 2 (3 segundos).");
    }, 3000);
});

// Usamos Promise.race para obtener el resultado de la promesa más rápida
Promise.race([promise1, promise2]).then((result) => {
    console.log(result); // Imprimimos el resultado
});
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%204/Ejemplo%202.png)

---

## Ejercicio 3: Manejo de Errores

Crea tres promesas, donde una de ellas se rechaza. Utiliza Promise.race para capturar el error de la promesa que se rechaza primero.

### Código de solución:

```js
// Definimos tres promesas
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 1 resuelta.");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa 2 rechazada.");
    }, 1000); // Esta promesa se rechaza primero
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 3 resuelta.");
    }, 3000);
});

// Usamos Promise.race para manejar la promesa que se rechaza
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(result); // No se ejecutará
    })
    .catch((error) => {
        console.log(error); // Imprimimos el error
    });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%204/Ejemplo%203.png)

---

## Ejercicio 4: Temporizador con Promise.race

Crea un temporizador que se resuelva en 5 segundos y una promesa que se resuelva en 3 segundos. Utiliza Promise.race para mostrar cuál se resuelve primero.

### Código de solución:

```js
// Definimos una promesa que simula un temporizador de 5 segundos
const timerPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Temporizador (5 segundos).");
    }, 5000);
});

// Definimos otra promesa que se resuelve en 3 segundos
const shortPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa corta (3 segundos).");
    }, 3000);
});

// Usamos Promise.race para ver cuál se resuelve primero
Promise.race([timerPromise, shortPromise]).then((result) => {
    console.log(result); // Imprimimos el resultado
});
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%204/Ejemplo%204.png)

---

## Ejercicio 5: Varios Resultados

Crea cinco promesas que se resuelven en diferentes intervalos de tiempo (1, 2, 3, 4 y 5 segundos). Utiliza Promise.race para mostrar el resultado de la promesa que se resuelva primero.

### Código de solución:

```js
// Definimos cinco promesas con diferentes tiempos de resolución
const promises = [
  new Promise((resolve) => setTimeout(() => resolve("1 segundo."), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("2 segundos."), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("3 segundos."), 3000)),
  new Promise((resolve) => setTimeout(() => resolve("4 segundos."), 4000)),
  new Promise((resolve) => setTimeout(() => resolve("5 segundos."), 5000)),
];

// Usamos Promise.race para obtener la promesa más rápida
Promise.race(promises).then((result) => {
  console.log(result); // Imprimimos el resultado
});
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%204/Ejemplo%205.png)

---

## Ejercicio 6: Ejemplo de Simulación

Crea dos promesas que simulen un proceso de carga (una más rápida que la otra). Utiliza Promise.race para manejar cuál se resuelve primero.

### Código de solución:

```js
// Simulamos dos procesos de carga
const loadDataFromAPI = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Carga de datos desde la API (rápido).");
    }, 1500);
});

const loadDataFromServer = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Carga de datos desde el servidor (lento).");
    }, 3000);
});

// Usamos Promise.race para manejar cuál carga primero
Promise.race([loadDataFromAPI, loadDataFromServer]).then((result) => {
    console.log(result); // Imprimimos el resultado
});
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%204/Ejemplo%206.png)

---

## Ejercicio 7: Combinar Promesas y Errores

Crea tres promesas, donde dos se resuelven y una se rechaza. Utiliza Promise.race para capturar el rechazo.

### Código de solución:

```js
// Creamos tres promesas
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 1 resuelta.");
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promesa 2 resuelta.");
    }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa 3 rechazada.");
    }, 1500); // Esta se rechaza entre las otras
});

// Usamos Promise.race para manejar la que se resuelva o se rechace primero
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log(result); // Imprimimos el resultado si se resuelve
    })
    .catch((error) => {
        console.log(error); // Imprimimos el error si se rechaza
    });
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%204/Ejemplo%207.png)

---

## Ejercicio 8: Resultado de Múltiples Consultas

Simula múltiples consultas a una API utilizando Promise.race. Imprime el resultado de la consulta que se complete primero.

### Código de solución:

```js
// Simulamos tres consultas a una API con diferentes tiempos de respuesta
const query1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Consulta 1 finalizada (2 segundos).");
    }, 2000);
});

const query2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Consulta 2 finalizada (3 segundos).");
    }, 3000);
});

const query3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Consulta 3 finalizada (1 segundo).");
    }, 1000);
});

// Usamos Promise.race para obtener la consulta que se complete primero
Promise.race([query1, query2, query3]).then((result) => {
    console.log(result); // Imprimimos el resultado
});
```

### Ejecución:

![Imagen Introducción](../../static/img/Capturas/Tema%204/Ejemplo%208.png)
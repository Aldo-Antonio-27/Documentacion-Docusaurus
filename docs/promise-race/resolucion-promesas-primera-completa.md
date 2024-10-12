---
sidebar_position: 2
---

# Resolución de Promesas con la Primera que se Complete

Este método es práctico en situaciones donde lo más importante es la velocidad de la operación, y no necesariamente la resolución de todas las promesas.

```js
const promise1 = new Promise(resolve => setTimeout(() => resolve('Promesa 1 completada'), 3000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promesa 2 completada'), 1000));

Promise.race([promise1, promise2])
  .then(result => console.log(result))   // "Promesa 2 completada"
  .catch(error => console.log(error));
```

Aunque ambas promesas se inician simultáneamente, `Promise.race` se resuelve tan pronto como `promise2` finaliza, ignorando el tiempo de espera de la primera promesa.
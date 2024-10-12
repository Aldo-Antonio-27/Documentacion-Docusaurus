---
sidebar_position: 2
---

# Ejecución de Múltiples Promesas en Paralelo

`Promise.all` es útil cuando se necesita realizar varias tareas asíncronas simultáneamente y se requiere esperar a que todas se completen antes de continuar. Si todas las promesas se resuelven correctamente, se devuelve un arreglo con los resultados de cada una de ellas.

```js
const promise1 = new Promise(resolve => setTimeout(() => resolve('Promesa 1 completada'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promesa 2 completada'), 2000));

Promise.all([promise1, promise2])
  .then(results => console.log(results))   // ["Promesa 1 completada", "Promesa 2 completada"]
  .catch(error => console.log(error));
```

Ambas promesas se ejecutan en paralelo, y el resultado del arreglo `["Promesa 1 completada", "Promesa 2 completada"]` solo se mostrará cuando ambas hayan finalizado.
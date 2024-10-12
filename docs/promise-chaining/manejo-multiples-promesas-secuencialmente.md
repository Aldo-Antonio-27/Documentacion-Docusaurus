---
sidebar_position: 2
---

# Manejo de Múltiples Promesas Secuencialmente

El encadenamiento es útil cuando una tarea depende del resultado de otra. Cada bloque .then() procesa el valor devuelto por el anterior y puede devolver un valor o una nueva promesa. Si se devuelve una nueva promesa, el siguiente bloque .then() esperará su resolución.

```js
const fetchData = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve("Datos obtenidos"), 1000);
});

fetchData()
  .then(result => {
    console.log(result);   // "Datos obtenidos"
    return "Procesando datos";
  })
  .then(result => {
    console.log(result);   // "Procesando datos"
    return "Datos finalizados";
  })
  .then(result => console.log(result))   // "Datos finalizados"
  .catch(error => console.log("Error:", error));
```

Las promesas se resuelven en secuencia, permitiendo que cada paso procese el resultado del anterior. Si en algún momento ocurre un error, el método .catch() capturará el error.
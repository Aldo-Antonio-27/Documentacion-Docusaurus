---
sidebar_position: 2
---

# Sintaxis y Uso Básico

La sintaxis básica para crear una promesa involucra el constructor `Promise`. Este recibe una función ejecutora que, a su vez, toma dos parámetros: `resolve` y `reject`. El primero se utiliza para indicar que la operación se ha completado con éxito, y el segundo se emplea para señalar que la operación ha fallado.

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;   // Ejemplo de una condición

  if (success) {
    resolve("Operación exitosa.");
  } else {
    reject("Error en la operación.");
  }
});
```

Una vez creada la promesa, es posible interactuar con ella usando los métodos `.then()` y `.catch()`. El método `.then()` se ejecuta si la promesa se resuelve exitosamente, mientras que el método `.catch()` se encarga de los casos en los que la promesa es rechazada.

```js
myPromise
  .then(result => console.log(result))   // Resultado en caso de éxito
  .catch(error => console.log(error));   // Error en caso de fallo
```
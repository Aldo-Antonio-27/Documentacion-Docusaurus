---
sidebar_position: 1
---

# Concepto y Definición

`Promise.race` es un método que ejecuta varias promesas en paralelo, pero a diferencia de `Promise.all`, retorna el resultado de la primera promesa que se resuelve o rechaza. No espera a que todas las promesas finalicen; en cuanto una promesa se completa, ya sea con éxito o error, `Promise.race` devuelve ese resultado y no espera a las demás.

Este método es útil en situaciones donde se requiere tomar una acción tan pronto como la primera operación se complete, sin importar las demás. Por ejemplo, en una situación de solicitud de recursos, se puede utilizar `Promise.race` para obtener el primer recurso disponible de varios servidores, o para implementar un temporizador que limite el tiempo de espera de una operación.

```js
Promise.race([promesa1, promesa2, promesa3])
  .then(resultado => {
    // La primera promesa que se resolvió o rechazó
    console.log(resultado);
  })
  .catch(error => {
    // Si la primera promesa en completarse fue rechazada
    console.error(error);
  });
```

`Promise.race` es especialmente útil cuando se busca obtener el resultado más rápido posible de un conjunto de tareas, sin importar cuál sea el orden de finalización de las otras.
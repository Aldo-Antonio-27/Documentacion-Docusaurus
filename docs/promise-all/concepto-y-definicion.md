---
sidebar_position: 1
---

# Concepto y Definición

`Promise.all` es un método que permite ejecutar varias promesas en paralelo. Toma un iterable (como un array) de promesas y devuelve una sola promesa que se resuelve cuando todas las promesas proporcionadas se han completado correctamente, o se rechaza si alguna de ellas falla. Este enfoque es útil cuando se tienen varias tareas independientes que se pueden ejecutar simultáneamente y se necesita esperar a que todas terminen antes de proceder.

Si todas las promesas se resuelven con éxito, `Promise.all` retorna un array con los valores de cada promesa, manteniendo el orden original, independientemente del tiempo que haya tomado cada una. Si alguna promesa es rechazada, `Promise.all` se rechaza inmediatamente con el error de la promesa que falló, y las otras promesas siguen ejecutándose en segundo plano.

Este método es comúnmente usado en escenarios donde se deben realizar varias solicitudes a un servidor, como la obtención de datos de múltiples fuentes simultáneamente.

```js
Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => {
    // Las tres promesas se resolvieron
    console.log(resultados);
  })
  .catch(error => {
    // Al menos una promesa falló
    console.error(error);
  });
```
---
sidebar_position: 1
---

# Concepto y Definición

El encadenamiento de promesas, o Promise chaining, es un patrón que permite ejecutar múltiples operaciones asíncronas en secuencia, donde cada operación depende del resultado de la anterior. Esto es posible gracias a que el método `.then()` devuelve una nueva promesa. Cada vez que una operación asíncrona se completa exitosamente, su resultado puede ser pasado a la siguiente operación en la cadena.

Este enfoque es útil para manejar escenarios donde varias operaciones necesitan ejecutarse en orden. Por ejemplo, al realizar una serie de solicitudes a una API, donde cada solicitud depende del resultado de la anterior. Además, al final de la cadena, es posible manejar cualquier error que ocurra durante cualquiera de las operaciones utilizando `.catch().` Esto garantiza un control estructurado del flujo y evita los callbacks anidados.

Ejemplo de flujo:
- Operación 1 → .then(Operación 2) → .then(Operación 3) → .catch(manejarError)

El encadenamiento permite simplificar el manejo de múltiples procesos asíncronos dependientes, haciendo que el código sea más fácil de leer y mantener.
---
sidebar_position: 3
---

# Ejemplos

## Ejercicio 1: Suma de Dos Números

Crea dos promesas que sumen dos números de forma asíncrona y devuelvan el resultado total utilizando Promise.all.

### Código de solución:

```js
// Función que suma dos números después de un retraso.
const sumar = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
};

// Usamos Promise.all para sumar dos números.
const num1 = sumar(5);
const num2 = sumar(10);

Promise.all([num1, num2])
  .then((resultados) => {
    const sumaTotal = resultados.reduce((acum, num) => acum + num, 0);
    console.log(`La suma total es: ${sumaTotal}`);
  });
```

### Ejecución:

```
La suma total es: 15
```

---

## Ejercicio 2: Obtener Datos de Usuarios

Simula la obtención de datos de usuarios desde diferentes fuentes asíncronas y usa Promise.all para manejar los resultados.

### Código de solución:

```js
// Función que simula la obtención de datos de un usuario.
const obtenerUsuario = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: id, nombre: `Usuario${id}` });
    }, Math.random() * 2000);
  });
};

// Obtenemos datos de tres usuarios.
const promesasUsuarios = [obtenerUsuario(1), obtenerUsuario(2), obtenerUsuario(3)];

Promise.all(promesasUsuarios)
  .then((usuarios) => {
    console.log("Datos de usuarios obtenidos:", usuarios);
  });
```

### Ejecución:

```
Datos de usuarios obtenidos: [{ id: 1, nombre: 'Usuario1' }, { id: 2, nombre: 'Usuario2' }, { id: 3, nombre: 'Usuario3' }]
```

---

## Ejercicio 3: Cargar Imágenes

Crea promesas que simulan la carga de imágenes de forma asíncrona y utiliza Promise.all para manejar la finalización de todas las cargas.

### Código de solución:

```js
// Función que simula la carga de una imagen.
const cargarImagen = (nombre) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Imagen ${nombre} cargada.`);
    }, Math.random() * 3000);
  });
};

// Cargamos tres imágenes.
const promesasImagenes = [cargarImagen("foto1.jpg"), cargarImagen("foto2.jpg"), cargarImagen("foto3.jpg")];

Promise.all(promesasImagenes)
  .then((resultados) => {
    console.log("Resultados de carga de imágenes:", resultados);
  });
```

### Ejecución:

```
Resultados de carga de imágenes: ['Imagen foto1.jpg cargada.', 'Imagen foto2.jpg cargada.', 'Imagen foto3.jpg cargada.']
```

---

## Ejercicio 4: Consulta a APIs

Simula consultas a diferentes APIs para obtener datos y utiliza Promise.all para procesar todas las respuestas.

### Código de solución:

```js
// Función que simula una consulta a una API.
const consultarAPI = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Datos de ${url}`);
    }, Math.random() * 2500);
  });
};

// Consultas a tres APIs diferentes.
const promesasAPIs = [
  consultarAPI("api/usuarios"),
  consultarAPI("api/productos"),
  consultarAPI("api/ordenes"),
];

Promise.all(promesasAPIs)
  .then((respuestas) => {
    console.log("Respuestas de las APIs:", respuestas);
  });
```

### Ejecución:

```
Respuestas de las APIs: ['Datos de api/usuarios', 'Datos de api/productos', 'Datos de api/ordenes']
```

---

## Ejercicio 5: Obtener Información de Archivos

Simula la lectura de múltiples archivos de forma asíncrona y usa Promise.all para manejar el contenido leído.

### Código de solución:

```js
// Función que simula la lectura de un archivo.
const leerArchivo = (nombre) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Contenido de ${nombre}`);
    }, Math.random() * 2000);
  });
};

// Leemos tres archivos.
const promesasArchivos = [leerArchivo("archivo1.txt"), leerArchivo("archivo2.txt"), leerArchivo("archivo3.txt")];

Promise.all(promesasArchivos)
  .then((contenidos) => {
    console.log("Contenidos de los archivos:", contenidos);
  });
```

### Ejecución:

```
Contenidos de los archivos: ['Contenido de archivo1.txt', 'Contenido de archivo2.txt', 'Contenido de archivo3.txt']
```

---

## Ejercicio 6: Simulación de Tiempos de Respuesta

Crea promesas que simulen diferentes tiempos de respuesta y utiliza Promise.all para imprimir los resultados una vez que todas se completen.

### Código de solución:

```js
// Función que simula un tiempo de respuesta aleatorio.
const respuestaAleatoria = (id) => {
  return new Promise((resolve) => {
    const tiempo = Math.floor(Math.random() * 3000) + 1000; // Tiempo entre 1 y 4 segundos
    setTimeout(() => {
      resolve(`Respuesta ${id} recibida después de ${tiempo} ms.`);
    }, tiempo);
  });
};

// Simulamos 3 respuestas aleatorias.
const promesasRespuestas = [respuestaAleatoria(1), respuestaAleatoria(2), respuestaAleatoria(3)];

Promise.all(promesasRespuestas)
  .then((resultados) => {
    console.log("Todas las respuestas recibidas:", resultados);
  });
```

### Ejecución:

```
Todas las respuestas recibidas: ['Respuesta 1 recibida después de ... ms.', 'Respuesta 2 recibida después de ... ms.', 'Respuesta 3 recibida después de ... ms.']
```

---

## Ejercicio 7: Fetch Múltiples Recursos

Simula la obtención de múltiples recursos utilizando fetch (simulado aquí) y utiliza Promise.all para manejar todas las respuestas.

### Código de solución:

```js
// Función que simula una solicitud fetch.
const fetchRecurso = (recurso) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Datos de ${recurso} obtenidos.`);
    }, Math.random() * 3000);
  });
};

// Simulamos solicitudes a tres recursos.
const promesasRecursos = [fetchRecurso("recurso1"), fetchRecurso("recurso2"), fetchRecurso("recurso3")];

Promise.all(promesasRecursos)
  .then((resultados) => {
    console.log("Resultados de los recursos:", resultados);
  });
```

### Ejecución:

```
Resultados de los recursos: ['Datos de recurso1 obtenidos.', 'Datos de recurso2 obtenidos.', 'Datos de recurso3 obtenidos.']
```

---

## Ejercicio 8: Manejo de Errores con Promise.all

Crea tres promesas que simulan operaciones asíncronas, pero una de ellas fallará. Utiliza Promise.all para manejar el error correctamente.

### Código de solución:

```js
// Función que simula una operación asíncrona.
const operacion = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 2) {
        reject(`Error en la operación ${id}.`);
      } else {
        resolve(`Operación ${id} completada.`);
      }
    }, Math.random() * 3000);
  });
};

// Simulamos tres operaciones, una de las cuales fallará.
const promesasOperaciones = [operacion(1), operacion(2), operacion(3)];

Promise.all(promesasOperaciones)
  .then((resultados) => {
    console.log("Resultados de las operaciones:", resultados);
  })
  .catch((error) => {
    console.error(error); // Manejo del error de la operación fallida.
  });
```

### Ejecución:

```
Error en la operación 2.
```
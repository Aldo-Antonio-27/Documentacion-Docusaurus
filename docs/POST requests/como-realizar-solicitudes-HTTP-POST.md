---
sidebar_position: 1
---

# Cómo realizar solicitudes HTTP POST

### ¿Qué es una Solicitud POST?
Las solicitudes HTTP POST se utilizan para enviar datos a un servidor, por lo general para crear o actualizar recursos. A diferencia de las solicitudes GET, las POST permiten adjuntar datos en el cuerpo de la solicitud, lo que facilita el envío de información más compleja.

![Imagen Representativa](../../static/img/post.webp)

### Realizar una Solicitud HTTP POST con Fetch
Con Fetch, puedes realizar solicitudes POST configurando el objeto de la solicitud y especificando el método, las cabeceras, y los datos en el cuerpo de la solicitud.

```js
fetch('https://api.example.com/nuevodato', {
  method: 'POST', // Especifica que la solicitud es POST
  headers: {
    'Content-Type': 'application/json', // Tipo de contenido enviado
  },
  body: JSON.stringify({
    nombre: 'Producto 1',
    precio: 19.99
  }), // Datos que se envían al servidor
})
.then(response => response.json()) // Convierte la respuesta en JSON
.then(data => console.log('Éxito:', data)) // Maneja la respuesta
.catch(error => console.error('Error:', error)); // Maneja errores

```

### Explicación del código:

- method: 'POST': Se especifica que el método de la solicitud es POST.
- headers: 'Content-Type': Indica que el contenido enviado es de tipo JSON.
- body: JSON.stringify(data): El cuerpo de la solicitud contiene los datos que se envían, convertidos a formato JSON.
- response.json(): Convierte la respuesta en formato JSON.
- .then(): Maneja la respuesta recibida y muestra los datos en la consola.
- .catch(): Captura y maneja cualquier error que ocurra durante la solicitud.
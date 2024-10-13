---
sidebar_position: 1
---

# Fetch API: Concepto y Funcionamiento

La **Fetch API** es una interfaz nativa de JavaScript que permite realizar solicitudes HTTP de manera asíncrona. Fue introducida para reemplazar al antiguo `XMLHttpRequest` proporcionando una forma más moderna, simple y basada en promesas para interactuar con recursos de red. La Fetch API es compatible con la mayoría de los navegadores modernos y facilita tanto las solicitudes **GET** como las **POST**.

![Imagen Representativa2](../../static/img/promises.png)


### Características clave de Fetch API:

- **Basada en promesas**: A diferencia de `XMLHttpRequest`, la Fetch API usa promesas, lo que permite manejar respuestas de manera más limpia y sencilla con `.then()` y `.catch()`.
- **Soporte para múltiples tipos de respuestas**: Fetch puede manejar respuestas como texto, JSON, blobs, buffers, entre otros.
- **Configuración flexible**: Puedes personalizar las solicitudes mediante la adición de cabeceras (headers), cuerpo (body), y métodos HTTP.

### Funcionamiento Básico

Cuando realizas una solicitud con Fetch, se genera una promesa que, si es exitosa, resuelve con un objeto de tipo `Response`. Este objeto contiene detalles como el estado de la solicitud, los headers, y los datos que devuelve el servidor. Aquí te mostramos el flujo básico de Fetch:

1. **Realizas una solicitud con Fetch**.
2. **Recibes una promesa que resuelve con un objeto `Response`** si la solicitud es exitosa.
3. **Accedes a los datos de la respuesta** utilizando métodos como `.json()`, `.text()`, o `.blob()` dependiendo del tipo de respuesta que esperas.

Ejemplo básico de uso de Fetch:

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Hubo un problema con la solicitud:', error));
```
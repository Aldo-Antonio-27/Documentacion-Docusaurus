---
sidebar_position: 1
---

# Concepto y Definición

Una promesa en JavaScript es un objeto que representa la eventual finalización o fracaso de una operación asíncrona. A diferencia de las funciones tradicionales, que retornan resultados inmediatos, las promesas permiten trabajar con resultados que se obtendrán en el futuro, lo que es fundamental para manejar operaciones como llamadas a APIs, acceso a archivos o temporizadores.

Las promesa facilita el control de flujos asíncronos, permitiendo que las operaciones continúen mientras se espera el resultado de procesos que podrían tardar un tiempo indeterminado. Las promesas tienen tres estados posibles:

- **Pendiente (`pending`):** La operación aún no ha concluido, y la promesa está esperando una resolución o rechazo.
- **Resuelta (`fulfilled`):** La operación ha concluido con éxito y la promesa devuelve un valor.
- **Rechazada (`rejected`):** La operación ha fallado y la promesa proporciona un motivo o error.

Este mecanismo es esencial para evitar la "pirámide de la perdición" (callback hell), un problema común en el uso excesivo de funciones de devolución de llamada anidadas.

![Imagen Introducción](../../static/img/Imagen%20Tema%201.png)
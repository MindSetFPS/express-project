
![](utm.png "Logo de la universidad")

# mefit: Aplicación de administración de armario y venta de ropa.
# TSU Desarrollo de Software Multiplataforma
# Evaluación y Mejora para el Desarrollo de Software - 4°F
# 17 de Octubre del 2024

\pagebreak

![Introducción](#introducción)
![Contenido](#contenido)
![Modulo de usuario](#1-módulo-de-usuario)
![Introducción](#introducción)
![Introducción](#introducción)
![Introducción](#introducción)


# Alcance del Desarrollo del Sistema para la aplicación mefit

## Introducción

El fast fashion ha impulsado un consumo desechable que contribuye significativamente al impacto ambiental, destacándose como responsable del 10% de las emisiones globales de carbono y un elevado desperdicio de recursos como el agua. En respuesta, surge una tendencia hacia una moda sostenible, destacando el mercado de ropa de segunda mano como una alternativa viable. Nuestra propuesta es desarrollar una aplicación  que combine la gestión digital del armario personal con un marketplace para ropa de segunda mano, promoviendo un modelo de consumo más sostenible y práctico.

# Contenido

### 1. Módulo de Usuario

### 1.1 Modulo de armario diginal

#### 1.1.1 Agregar ropa al armario:

- Los usuarios pueden añadir prendas a su armario digital capturándolas con la cámara.
- Al capturar, se remueve el fondo el fondo dejando únicamente la pieza en la imagen.
- Permite editar detalles de las prendas, como marca, modelo y precio.

#### 1.1.2 Planificar outfits:

- Crear y guardar combinaciones de ropa (outfits) utilizando las prendas disponibles en su armario.
- Asignar outfits a días específicos del calendario.

#### 1.1.3 Recomendación de productos:

- Basándose en los outfits creados y el estilo del usuario, la aplicación sugiere productos similares disponibles en la tienda.
- El usuario puede agregar el producto a su carrito desde esta sección.

#### 1.1.4 Solicitar un style bundle

- Los usuarios pueden solicitar que un estilista personal les cree un style bundle.
- La aplicación sugiere distintos estilistas para que la persona elija.
- Cuando el usuario elige, se inicia una chat donde se pueden mandar texto, imágenes y videos.
- El usuario puede enviar sus prendas o outfits personalizados.

---

### 1.2 Módulo de Tienda

El marketplace integrado fomenta la economía circular al permitir la compra y venta de ropa de segunda mano:

#### 1.2.1 Publicar ropa del armario para la venta:

- Los usuarios pueden listar prendas directamente desde su armario personal.
- Los usuarios pueden listar prendas directamente en el marketplace sin pasar por la sección de agregar una prenda.

#### 1.2.2 Búsqueda de ropa por descripción y similitud:

- Los usuarios pueden realizar búsquedas utilizando descripciones o imágenes, y se mostrarán resultados similares.

#### 1.2.3 Agregar productos al carrito de compras:

- Facilita la creación de un carrito, con la opción de envío gratis para compras mayores a \$300 MXN.

#### 1.2.4 Pago de productos:

- Integración de un sistema de pago que acepta tarjetas de débito y crédito dentro de México.

#### 1.2.5 Agregar automáticamente al armario

- Cuando un usuario compra una prenda desde el marketplace, la prenda se agrega automáticamente a su armario.

#### 1.2.6 Calcular el costo de la comisión

- Restar al dinero cobrado un 23% de comisión que se queda para la plataforma. El resto es envíado a una cuenta de bando de usuario.



### 2. Módulo de Estilista Personal

Este módulo conecta a los usuarios con expertos en moda que ofrecen recomendaciones personalizadas y servicios adicionales:

####

#### 2.2 Ver opciones de servicios

- Los estilistas tienen una vista para elegir los servicios disponibles.

#### 2.1 Crear perfil de estilista personal.

- Un usuario registrado puede solicitar su registro como estilista personal, que puede ser aprobado o rechazado por un administrador.

#### 2.1 Visualizar solicitudes de style bundle

#### 2.2 Venta de ropa del catálogo a otros usuarios:

- Los estilistas pueden sugerir prendas basadas en el armario y las preferencias del usuario.

#### 2.2 Uso de información del usuario:

- Acceso a datos como outfits guardados, prendas en el armario y fotos.

#### 2.3 Espejo mágico:

- Visualización de cómo le quedaría la ropa recomendada mediante simulaciones con IA.

#### 2.4 Comunicación:

- Los estilistas pueden interactuar con los usuarios mediante videollamadas o mensajes dentro de la app.

#### 2.5 Comisión por venta:

- Al valor de los artículos, sumar \$250 que son la comisión del estilista personal.
- Al valor del style bundle restar un 23% antes de la comisión del estilista.
- Repartir entre los vendedores el dinero correspondiente al valor de su prenda después de haber restado la comisión.

### 3. Módulo Administrativo

Este módulo permite a los administradores gestionar eficientemente las entidades del sistema y realizar acciones relacionadas con la base de datos:

#### 3.1 Gestión del Armario Digital:

- Visualizar, editar o eliminar registros de prendas añadidas por los usuarios.
- Revisar el historial de outfits creados y modificarlos si es necesario.

#### 3.2 Gestión del Marketplace:

- Revisar y aprobar prendas listadas para la venta.
- Monitorear las transacciones realizadas y generar reportes de ventas.
- Eliminar u ocultar un producto si es necesario.

#### 3.3 Gestión de Estilistas:

- Revisar y validar estilistas registrados en la plataforma.
- Supervisar las recomendaciones realizadas y el cálculo de comisiones.

#### 3.4 Gestión de Logística:

- Monitorear los envíos en curso y gestionar incidencias relacionadas con entregas.
- Verificar la correcta integración de productos comprados al armario digital de los usuarios.

#### 3.5 Generación de Reportes:

- Generar reportes estadísticos sobre el uso de la aplicación, como prendas más vendidas, ingresos generados y participación de estilistas.

#### 3.6 Gestión de usuarios

- Banear o borrar usuarios.
- Permitir a un usuario reiniciar su contraseña.
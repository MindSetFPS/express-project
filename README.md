# mefit

![image](logoapp.png)

mefit allows users to discover their next favorite clothes.

![](backend-diagram.png.png)
![](docker-diagram.png.png.png)

# Business info

https://night-existence-458.notion.site/Proyecto-Integrador-bf781a0e8800499499a1ff6e52a49b9f?pvs=74

## Objectives:

- [ ] Landing page
- [ ] Dashboard
- [ ] 6 tables
- [ ] Api 

## Structure

```src/
    backend/
        entity/
            domain/ -- imports from itself -- rarely change
                entities/
                value-objects/
            app/  -- imports from domain -- sometimes changes
                use-case-implementations/
                integrations/
            infra/ -- imports from application -- constantly change
                persistance/
```

## Tutorials

### Typescript

<https://www.youtube.com/watch?v=xtp_DuPxo9Q&pp=ygUcdHlwZXNjcmlwdCB0dXRvcmlhbCBlc3Bhw7FvbA==>

<https://www.youtube.com/watch?v=30LWjhZzg50&pp=ygUUdHlwZXNjcmlwdCB0dXRvcmlhbCA=>

### React Native

<https://www.youtube.com/watch?v=U23lNFm_J70&pp=ygUUcmVhY3QgbmF0aXZlIG1pZHVkZXY=>

<https://www.youtube.com/watch?v=ZBCUegTZF7M&pp=ygUTcmVhY3QgbmF0aXZlIGNvdXJzZQ==>

<https://medium.com/@deivisonisidoro_94304/revolutionizing-software-development-unveiling-the-power-of-clean-architecture-with-typescript-5ee968357d35>

[OOTDiffusion](https://huggingface.co/spaces/levihsu/OOTDiffusion)

## Project setup

### Backend

https://www.notion.so/Proyecto-Integrador-bf781a0e8800499499a1ff6e52a49b9f#12f072f408468011a100ceaad972ad6a

#### Dotenv

Crea un archivo en la raíz del proyecto llamado `.env` llena el archivo con la siguiente información:

```bash
MYSQL_HOST=127.0.0.1
MYSQL_USER=root
MYSQL_PORT=3306
MYSQL_PASSWORD=password
MYSQL_DATABASE=app
```


### Database

#### Execute database script in docker

`docker exec -i container-name mysql -u root -ppassword <./script.sql`

### Frontend

#### UI Library

<https://www.radix-ui.com/>

#### Tools
https://colorgradient.dev/gradient-generator/
https://css-tricks.com/clipping-masking-css/
https://css-tricks.com/clipping-masking-css/
https://codepen.io/chriscoyier/pen/PwPEJd?editors=1000
https://www.tailframes.com/marketing/hero-section
https://bennettfeely.com/clippy/

### App

#### UI Library
https://gluestack.io/

#### Might use later
https://shopify.github.io/react-native-skia/
https://github.com/gre/react-native-view-shot
https://github.com/gunnartorfis/sonner-native

### Hosting

#### Might use
https://sevalla.com/static-site-hosting/




# Team work

## 1. Módulo de Armario Digital

### Agregar ropa al armario:

- El usuario puede añadir ropa a su armario personal, a través de la camara (para web solo se sube desde los archivos).
- El usuario puede editar detalles de la prende como marca, modelo y precio.

### Planificar outfits:

- El usuario puede crear y guardar diferentes combinaciones de ropa (outfits) usando las prendas disponibles en su armario.

- Calcular valor por uso (cost-per-wear):
- El usuario puede asignar un outfit a un día del mes.
- Las prendas tienen detalles opcionales (marca, modelo, precio) que no dan error si no se llenan.

## Recomendación de productos:

- Al configurar un outfit, la app sugiere productos adicionales o similares que están disponibles en el catálogo de la tienda, basándose en las preferencias y el estilo del usuario.
- La aplicación calcula y muestra el valor por uso de cada prenda, basándose en la frecuencia de uso registrada en el armario.

## 2. Módulo de Tienda

### Publicar ropa del armario para la venta:

- El usuario puede listar prendas de su armario personal para venderlas en la tienda con un solo clic.

### Búsqueda de ropa por descripción y similitud:

- Los usuarios pueden buscar productos en la tienda utilizando descripciones de texto o imágenes, y la app ofrecerá resultados similares o relacionados (por ahora solo texto).

### Agregar productos al carrito de compras:

- Los usuarios pueden añadir productos al carrito y proceder a pagar, siempre cumpliendo con el requisito de una compra mínima de $300 para que el envio sea gratis.

- Las funcionalidades del carrito solo existen dentro de la sección de tienda.

### Pago de productos(implementar un mock, no hacer de verdad):

- Integración de un sistema de pago para permitir a los usuarios completar la compra de los productos en su carrito .
- El sistema de pago debe aceptar tarjetas de debito y credito dentro del territorio mexicano.

### Feed de tienda:

- Lista de productos al azar, se puede tocar para ver el detalle de producto.
- El usuario puede filtrar por tipo de prenda, temporada o color

### Producto

- Se pueden ver imagenes del producto.
- El usuario puede tocar un boton para agregar al carrito.
- El usuario puede entrar a ver el perfil del vendedor.
- El usuario puede presionar un boton para usar el espejo magico.
- El usuario puede ver otras recomendaciones de ropa en la misma pagina de producto.
- El usuario puede buscar dentro de la categoria de producto.


## 3. Módulo de Estilista Personal (en pausa):
 
- Venta de ropa del catálogo a otros usuarios:
- El estilista puede recomendar y vender ropa del catálogo a otros usuarios, con acceso a la información del armario, outfits y preferencias de estilo de cada usuario.
- Uso de información del usuario:
- El estilista tiene acceso a información relevante sobre el armario personal del usuario, sus outfits guardados y sus fotos, para personalizar las recomendaciones.
- Espejo mágico:
- El usuario puede utilizar el "espejo mágico" para visualizar cómo le quedaría la ropa recomendada antes de hacer la compra.
- Comunicación:
- El estilista puede comunicarse con el usuario mediante video o mensajes dentro de la plataforma para discutir las opciones de estilo y realizar recomendaciones personalizadas.
- Comisión por venta:
- El estilista recibe una comisión por cada venta realizada, la cual se calcula en función del valor total de la transacción.

## 4. Módulo de Entrega y Logística

### Gestión de envíos:

- La plataforma se encarga del proceso de envío de los productos vendidos, coordinando la logística y garantizando la entrega al comprador.

### Transferencia de productos al armario digital:

- Al comprar un producto, este se añade automáticamente al armario digital del usuario, lo que simplifica la gestión de su inventario personal.
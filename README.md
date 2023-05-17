# Desafío 4 - Motores de plantillas + Websocket

Este repositorio contiene el código fuente para el Desafío 4, titulado "Motores de plantillas + Websocket". En este desafío, se utiliza Handlebars como motor de plantillas y Websocket para cargar productos en tiempo real.

## Requisitos previos

- Node.js: Asegúrate de tener Node.js instalado en tu máquina.

## Configuración

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

```
   $ git clone https://github.com/maurogarro73/desafio4-Websocket-MauroGarro
```

2. Instala las dependencias del proyecto ejecutando el siguiente comando:

```
   $ npm install
```

## Ejecución

1. Inicia la aplicación ejecutando el siguiente comando:

```
   $ npm run dev
```

2. Abre tu navegador web y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Uso

La aplicación utiliza Handlebars como motor de plantillas para renderizar la interfaz de usuario. Además, se utiliza Websocket para cargar los productos en tiempo real.

Cuando accedas a la aplicación en tu navegador, podrás ver una lista de productos. Si otro usuario agrega, modifica o elimina un producto, la lista se actualizará automáticamente en todos los clientes conectados gracias a Websocket.

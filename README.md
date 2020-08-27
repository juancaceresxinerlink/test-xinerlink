# Xinerlink

Este proyecto consta de un buscador con multiples filtros para las ofertas de trabajo suministradas por la API de Xinerlink. Desarrollado con React JS.

## ¿Como iniciar?

Para poder compilar los archivos y obtener la versión optimizada se debe ejecutar el siguiente comando, el cual creará una nueva carpeta en el directorio la cual debe ser hosteada en el servidor.

### `npm run build`

Esa carpeta solo contiene archivos compilados, por ello no debe ser modificado ningun archivo directamente, sino utilizar este código funte para realizar modificaciones.

## ¿Como realizar modificaciones?

Cualquier edición debe ser realizada en el código fuente, para ver los cambios en tiempo real es necesario ejecutar el siguiente comando, el cual se encarga de generar un servidor local de desarrollo.

### `npm start`

La carpeta /src es la encargada de contener todos los archivos que fueron utilizados para realizar este proyecto, la misma se divide en componentes, funciones, hooks, routers y los archivos principales de la App.

### Cambios en la API

Dentro de la carpeta SRC se encuntra 'App.js', ese archivo es el encargado de realizar la petición a la API mediante el hook useFetch. Para modificar la url cambias la constante dentro de App.js, y para agregar headers deberas modificar el hook 'useFetch' que se encuentra en la carpeta Hooks.
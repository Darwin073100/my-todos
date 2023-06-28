## Prpyecto en React: TODO Machine
En este proyecto podemos realizar varias tareas con los todos como:
- Agregar
- Completar
- Eliminar

Estos todos estan almacenados en `localStorage`, por lo que podemos recarga la pagina y ellos seguiran ahí con la información.
### Despliegue a Github Pages
- Instalamos la dependencia de la siguiente forma: `npm install gh-pages -D` , como una dependencia de desarrollo.
- Agregamos el script para hacer el buil si esque no lo llegaramo hacer manualmente: `"predeploy": "npm run build"`.
- Agregamos el script para hacer el despliegue: `"deploy": "gh-pages -d dist"`, ojo aquí, el parametro **-d dist**, esto puede variar dependiendo como se llame la carpeta que te crea el preprosesador, en algunos es, **build** y en mi caso **dist**.
- Corremos el comando `npm run deploy`, de esta manera, hará el deploy, creara una rama nueva en el repositorio remoto con el nombre **gh-pages**, esta rama sera la que este en producción, y podemos acceder al siguiente link para ver la pagina de TODOs: https://darwin073100.github.io/my-todos/
#####
El proyecto es UN API REST hecho con Nodejs y Expressjs la cual se baja los datos de la API dada https://dare-nodejs-assessment.herokuapp.com/swagger/json
Trabajo con los modelos en local, haciendo una ANALOGIA a lo que hace el proyecto proporcionado
Directamente los datos se consumen desde la carpeta /models, que previamente he consultado con Postman y alojado en dicha carpeta.
En el archivo routes/index.routes.js muestro la analogía en detalle

## about
La aplicacion local es funcional; cuenta con un /login (client_id: dare y client_secret: s3cr3t), y un middleware de validación con jwt para el acceso a 
las rutas /clients y /policies. Me he tomado la libertad de usar la autorización x-access-token en lugar de Bearer, que es como está hecha la api remota.
La app local no cuenta con tests.

## install
npm i express morgan jsonwebtoken
npm i nodemon -D
package.json -->   "scripts": {
                        "start": "nodemon src/index.js"
                    },

## to run the api
npm start

## Primer paso
Habre Postman, Insomnia o cualquier testing de APIS. Una vez arrancada la app con npm start
1) Haz una peticion POST a http://localhost:3000/api/login
    Manda compo body de la peticion
    {
    "client_id": "dare",
    "client_secret": "s3cr3t"
    }
    Recoje el token que te provee. Comprueba que no da token a cualquier otro usuario, solo a ese.

2) Haz una peticion GET a http://localhost:3000/api/clients
    Manda en los headers key: x-access-token y value: token  (Expira en un dia)

3) Haz una peticion GET a http://localhost:3000/api/policies
    Manda en los headers key: x-access-token y value: token 

## dependencias
express: como framework de nodejs
morgan: da información del tipo de peticion y su estatus
jsonwebtoken: para la tokenizacion y el sistema de autenticado

## dependencias de desarrollo
nodemon: para que el servidor se reinicie automaticamente

## source
Todo el código se encuentra en del directorio /src. División de este en subdirectorios /controllers, /middlewares, /models, /routes y el archivo de arranque index.

## Thank you

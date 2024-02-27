// Se requiere o se llama a todos los paquetes que necesita el proyecto

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const port = 3000;
const server = express();

//SE configura el servidor
server.use(cors());
server.use(express.json());

//SE CONFIGURAN LAS RUTAS, EN ESTE CASO PARA ESCRIBIR DATOS, USAREMOS EL `METODO POST / y se crea la coneccion al servidor
server.post("/insertar_en_BD", (req, res) => {
    const correo = req.body.email;
    const coneccion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "form_insert_node_express"
    });
    // miramos si hay algun error en la coneccion
    coneccion.connect(err => {
        if (err) {
            res.json("Error en la conexion con MYSQL: " + err);
        } else {
            // sino hay ningun error configuramos para hacer el insert en la base de datos
            const query = "insert into usuarios values (default, '" + correo + "');";
            coneccion.query(query, err =>{
                if (err) {
                    res.json("Error en el insert del correo: " + err);
                } else{
                    res.json("El correo se ha insertado correctamente");
                }
            });
        }
        
    });

});

//ARRANCAMOS EL SERVIDOR
server.listen(port, () => {
    console.log("Servidor conectado");
});

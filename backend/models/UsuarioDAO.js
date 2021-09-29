var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let database = require("./database");

function autenticar(correo, clave){
 let resultado=null;
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
            var dbo = db.db(database.db);
            var filtro={email:correo, password:clave};
           
            dbo.collection("usuarios").findOne(filtro, function(err, result) {
                resultado= result;
                if (err) throw err;
                db.close();
            });
        });
        console.log(resultado);
        return resultado;
}

module.exports={consultaSesionUsuario:autenticar()};
const jwt = require("jwt");
const  tokenSecret =require("../services/token");

function isAuth (req, res, next){
  if(!req.headers.authorization){
   return res.status(403).send({mensaje:"sin autorización"});
     }
     const token =req.headers.authorization.split('')[1];
     const payload =jwt.decode(token, tokenSecret.clave);
     req.usuario = payload;
     next();
    }

    module.exports = isAuth



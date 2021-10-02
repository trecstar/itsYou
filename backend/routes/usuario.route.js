const express = require("express");
const usuarioRoute = express.Router();
const service = require("../services/index.js");
const  tokenSecret =require("../services/token");
const jwt = require("jwt-simple");
//let usuarioDAO = require("./models/usuarioDAO");

// modelo usuario
let usuarioModel = require("../models/Usuario");

usuarioRoute.route("/").get((req, res) => {
  usuarioModel.find((error, data, next) => {
    if (error) {
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

usuarioRoute.route("/crear-usuario").post((req, res, next) => {
   usuarioModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      //console.log(data);
      
      res.json(data);
    
      
    }
  }); 
  
});

usuarioRoute.route("/getData").post((req, res, next)=>{
  console.log(req.headers);
  if(!req.headers.authorization){
    return res.status(403).send({mensaje:"sin autorización"});
      }
      const token =req.headers.authorization.split(' ')[1];
      const payload =jwt.decode(token, tokenSecret.clave);
      //req.usuario = payload;
      console.log(payload);
      res.json(payload);
});

usuarioRoute.route("/sesion-usuario").post((req, res, next) => {
var filtro ={email:req.body.email, password:req.body.password};

 usuarioModel.findOne(filtro,
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        console.log(data);
        if (data===null)
          res.status(200).send({data:data});
        else
        res.status(200).send({data:data,
          token:service.createToken(data) })
          //res.json(data);
        
      }
    }
  );
});

/* 
usuarioRoute.route("/autenticar").post((req, res, next) => {
 var data= usuarioDAO.autenticar();
  console.log(data);
 res.json(data);
 
}); */


module.exports = usuarioRoute;

<<<<<<< HEAD
const express = require("express");
const usuarioRoute = express.Router();

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
      console.log(data);
      res.json(data);
      
      
    }
  }); 
  
});


module.exports = usuarioRoute;
||||||| merged common ancestors
=======
const express = require("express");
const usuarioRoute = express.Router();
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


usuarioRoute.route("/sesion-usuario").post((req, res, next) => {
var filtro ={email:req.body.email, password:req.body.password};

 usuarioModel.findOne(filtro,
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log(data);
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
>>>>>>> DESARROLLO

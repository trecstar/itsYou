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
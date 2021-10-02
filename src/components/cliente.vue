<template>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Usuario registrado</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="assets/css/cliente.css" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
        
        <h2 id="marca"> <span></span><h1 id="marca" class="marca"><a href="index.html">it's You  </a></h1> </h2>
        <br>
        <br>

        <div class="testimonial-item">
          
          <img src="../assets/img/testimonials/testimonials-4.jpg" alt="">
          
        </div>


        <div class="testimonial-item">
        
        <!-- <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""> -->
        <h3>Matt Brandon</h3>
        <h4>Freelancer</h4>
        <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere, ut quae rerum ducimus architecto! Explicabo suscipit tenetur perspiciatis expedita modi provident asperiores saepe doloribus? Excepturi consectetur dolore qui voluptatem.
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        </div>
        <br>
        
        <div class="contenedor">
            <div class="contenedor__h1">
                <h1>Seleccione la plantilla del portafolio</h1>
            </div>
            

            
            <br>

            <!-- <button class="contenedor__b1" type="button">Portafolio Artistico</button> -->
            <a href="./ARTISTICA/index.html" class="btn btn-primary"> Portafolio Artistico</a>
            <br>
            

            <!-- <button class="contenedor__b2" type="button">Portafolio Estandar</button> -->
            <a href="./ESTANDAR/index.html" class="btn btn-primary"> Portafolio Estandar</a>
            <br>
            

            <!-- <button class="contenedor__b3" type="button">Portafolio Freelance</button> -->
            <a href="./FREELANCE/index.html" class="btn btn-primary"> Portafolio Freelance</a>
        </div>
        

        <table>
            <thead>
            <tr>
                <th colspan="3">Portafolios Creados</th>
            </tr>
            <tr>
                <th>#</th>
                <th colspan="2">Tipo de portafolio</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Artistico</td>
                <td>
                <i class="material-icons button edit">Editar</i>
                <i class="material-icons button edit">Publicar</i>
                <i class="material-icons button delete">Borrar</i>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Estandar</td>
                <td>
                <i class="material-icons button edit">Editar</i>
                <i class="material-icons button edit">Publicar</i>
                <i class="material-icons button delete">Borrar</i>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Freelance</td>
                <td>
                <i class="material-icons button edit">Editar</i>
                <i class="material-icons button edit">Publicar</i>
                <i class="material-icons button delete">Borrar</i>
                </td>
            </tr>
            </tbody>
        </table>

        
    </body>
    </html>
</template>

<script>
import axios from "axios";

let config = {
  headers: {
    autorizacion:`Bearer ${localStorage.token}` ,
  }
  }
  let apiURL = "http://localhost:4000/usuario-servicios/getData";
  axios
        .post(apiURL, this.usuario,config)
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

</script>
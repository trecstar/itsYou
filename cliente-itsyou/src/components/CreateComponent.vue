<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Formulario del Portafolio</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>Nombre</label>
            <input
              type="text"
              class="form-control"
              v-model="portafolio.name"
              required
            />
          </div>
          <br>

          <div class="form-group">
            <label>Lema de vida</label>
            <input
              type="text"
              class="form-control"
              v-model="portafolio.lema"
              required
            />
          </div>

          <br>
          <div class="container" data-aos="zoom-in" data-aos-delay="100">
            
            
            <div class="card-group">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Servicios a ofrecer</h5>
                  <p class="card-text"><input
              type="text"
              class="form-control"
              v-model="portafolio.servicio"
              required
            /></p>
                  
                </div>
              </div>
              <div class="card">
                
                <div class="card-body">
                  <h5 class="card-title">Habilidades blandas</h5>
                  <p class="card-text"><input
              type="text"
              class="form-control"
              v-model="portafolio.habilidad"
              required
            /></p>
                  
                </div>
              </div>
              <div class="card">
                
                <div class="card-body">
                  <h5 class="card-title">Logros obtenidos</h5>
                  <p class="card-text"><input
              type="text"
              class="form-control"
              v-model="portafolio.logro"
              required
            /></p>
                  
                </div>
              </div>
            </div>
          </div>
          <br>

          <div class="container">
            <h5>Contacto: </h5>
            <label>Correo electronico</label>
            <input
              type="email"
              class="form-control"
              v-model="portafolio.email"
              required
            />
            <br>
            <label>Celular</label>
            <input
              type="text"
              class="form-control"
              v-model="portafolio.phone"
              required
            />
            
          </div>

          <br>

          <div class="nav-menu">
            <button class="btn btn-primary">Guardar</button>
          </div>
        </form>
      </div>
    </div>
    <div>
      <div>
        <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>Portafolio Estandar</title>
        <meta content="" name="description">
        <meta content="" name="keywords">

        <!-- Favicons -->
        <link href="../IMAGENES/itsYouLogo1.png" rel="icon">
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

        <!-- Vendor CSS Files -->
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
        <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
        <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
        <link href="assets/vendor/aos/aos.css" rel="stylesheet">

        <!-- Template Main CSS File -->
        <link href="assets/css/style1.css" rel="stylesheet">

        <!-- =======================================================
        * Template Name: MyResume - v2.2.1
        * Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
        * Author: BootstrapMade.com
        * License: https://bootstrapmade.com/license/
        ======================================================== -->
      </head>
      <!-- <header id="header" class="d-flex flex-column justify-content-center">
        <form @submit.prevent="handleSubmitForm">

          <nav class="nav-menu">
            <ul>
              <li class="active"><a href="../index.html"><i class="bx bx-home"></i> <span>Inicio</span></a></li>
              <li>
              <button class="btn btn-primary">Create</button>
              </li>
              
              
            </ul>
          </nav>
        </form>

      </header> -->
      </div>
      
    </div>
  </div>
    
</template>

<script>
import axios from "axios";
import ruta from '../rutaAPI';

export default {
  data() {
    return {
      portafolio: {
        name: "",
        lema: "",
        servicio: "",
        habilidad: "",
        logro: "",
        email: "",
        phone: "",
        estado:"CREADO"
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = `${ruta.ruta_api}/api/create-portafolio`;
      let config = {
      headers: {
        authorization:`Bearer ${localStorage.token}` ,
      }
    }
      axios
        .post(apiURL, this.portafolio, config)
        .then(() => {
          this.$router.push("/cliente");
          this.portafolio = {
            name: "",
            lema: "",
            servicio: "",
            habilidad: "",
            logro: "",
            email: "",
            phone: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

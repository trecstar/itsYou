<template>
    <div class="container">

      <div class="section-title">
        <h2>Contacto</h2>
        <p>Canales de contacto</p>
      </div>

      <div class="row mt-2">

        
        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-envelope"></i>
            <h3>Correo Electrónico</h3>
            <h3>appitsyou@gmail.com</h3>
             <div v-if="esGuardado" class="alert alert-success" role="alert">
              {{resultado}}
      </div>
          </div>
        </div>
        
      </div>

      <form @submit.prevent="handleSubmitForm" role="form" class="php-email-form mt-4">
        <div class="form-row">
          <div class="col-md-6 form-group">
            <input type="text"  class="form-control" 
             placeholder="Nombre" data-rule="minlen:4" 
             data-msg="Please enter at least 4 chars" 
             v-model="informacion.name" />
            <div class="validate"></div>
          </div>
          <br>
          <div class="col-md-6 form-group">
            <input type="email" class="form-control" placeholder="Correo electrónico"
             data-rule="email" data-msg="Please enter a valid email"
             v-model="informacion.email" />
            <div class="validate"></div>
          </div>
        </div>
        <br>
        <div class="form-group">
          <input type="text" class="form-control"  v-model="informacion.subject" 
          placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
          <div class="validate"></div>
        </div>
        <br>
        <div class="form-group">
          <textarea class="form-control" v-model="informacion.message" 
          rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
          <div class="validate"></div>
        </div>
        <br>
        <br>
       <div class="form-group">
          <button class="btn btn-primary">Enviar</button></div>
      </form>

    </div>
</template>

<script>

import axios from "axios";
import ruta from '../rutaAPI';

export default {
  data() {
    return {
     passwordEscritoNuevamente:"",
     esGuardado:false,
     resultado:"",
     informacion: {
        email: "",
        subject:"",
        text:"correo desde itsyou",
        message:""        
      },
    };
  },
  created() {
    this.resultado="";
     
  },
  methods: {
    handleSubmitForm() {
      let apiURL = `${ruta.ruta_api}/usuario-servicios/correo-consulta`;
         
      axios
        .post(apiURL, this.informacion) 
        .then((res) => {
         
         this.resultado= res.data.mensaje;
         this.esGuardado = true;
       })
        .catch((error) => {
          console.log(error);
        });
    
    
    },
    },
  
};
</script>
<template>
<div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Recuperar Password</h3>
      <div  v-if="esGuardado" class="alert alert-success" role="alert">
      {{salida}}
      </div>
      <form @submit.prevent="handleSubmitForm">
        <br>
        <br>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="usuario.email"
            required
          />
        </div>
        <br>
        <br>

        
        <div class="form-group">
          <button class="btn btn-primary">Enviar</button>
        </div>
      </form>
   
    </div>
  </div>

</template>
<script>

import axios from "axios";
import ruta from '../../rutaAPI';

export default {
  data() {
    return {
     esGuardado:false,
     salida:"",
     usuario: {
        "email": ""
        },
    };
  },
  created() {
   this.salida ="";
   this.esGuardado=false;
  },
  methods: {
    handleSubmitForm() {
      let apiURL = `${ruta.ruta_api}/usuario-servicios/recuperar-clave`;
         
      axios
        .post(apiURL, this.usuario) 
        .then((res) => {
         
         this.salida= res.data.mensaje;
         this.esGuardado = true;
       })
        .catch((error) => {
          console.log(error);
        });

    },
    
   
  },
  
};
</script>

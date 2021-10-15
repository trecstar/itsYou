<template>
<div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Cambiar contraseña</h3>
      <div v-if="esGuardado" class="alert alert-success" role="alert">
        Cambio de password exitoso !
      </div>
      
      <form @submit.prevent="handleSubmitForm">
        <br>
        <br>
        <div class="form-group">
          <label>Ingrese Password Nuevo</label>
          <input
            type="password"
            class="form-control"
            v-model="usuario.password"
            required
          />
        </div>
        <br>
        
       
        <div class="form-group">
          <label>Ingrese Password Nuevamente</label>
          <input
            type="password"
            class="form-control"
            v-model="passwordEscritoNuevamente"
            required
          />
        </div>
        <br>
        <br>
        <div class="form-group">
          <button class="btn btn-primary">Cambiar</button>
          <button
                    @click.prevent="reenvio"
                    class="btn btn-warning"
                  >
                    Regresar
                  </button>
        </div>
        <br>
          
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
     passwordEscritoNuevamente:"",
     esGuardado:false,
     resultado:"",
     usuario: {
        "email": "",
        "password": ""
        
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = `${ruta.ruta_api}/usuario-servicios/cambiar-clave`;
         let config = {
      headers: {
        authorization:`Bearer ${localStorage.token}` ,
      }
    }
    if (this.usuario.password == this.passwordEscritoNuevamente) {
      axios
        .post(apiURL, this.usuario, config) 
        .then((res) => {
         
         this.resultado= res.data.data;
         alert("Password actualizado");
         this.esGuardado = true;
       })
        .catch((error) => {
          console.log(error);
        });
    }
    else {
        this.esGuardado = false;
        alert("Los campos de pasword no coincide");
      }
    },
    validacion (){
      if(!this.usuario.email || !this.usuario.password){
        this.salida="Complete todos los campo !"
      }
    },
    reenvio(){
   this.$router.go(-1);

   },
  },
  
};
</script>

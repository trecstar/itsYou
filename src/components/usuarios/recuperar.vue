<template>
<div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Recuperar Password</h3>
      <div  v-if="salida" class="alert alert-success" role="alert">
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
      {{resultado}}
    </div>
  </div>

</template>
<script>

import axios from "axios";

export default {
  data() {
    return {
     salida:"",
     resultado:"",
     usuario: {
        "email": "",
        "password": ""
        
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/usuario-servicios/sesion-usuario";
        
      axios
        .post(apiURL, this.usuario)
        .then((res) => {
         
         this.resultado= res.data.data;
         
          if(this.resultado===null){
           this.salida="Credenciales erroneas o usuario no registrado en el sistema";
         }
         else{
           localStorage.setItem("token", res.data.token);
            if (this.resultado.tipo_usuario=="regular"){
              this.$router.push("/cliente");
            }else if (this.resultado.tipo_usuario=="admin")
                this.$router.push("/administrador");
            this.salida="";
         } 
       })
        .catch((error) => {
          console.log(error);
        });

    },
    validacion (){
      if(!this.usuario.email || !this.usuario.password){
        this.salida="Complete todos los campo !"
      }
    },
  },
  
};
</script>

<<<<<<< HEAD
<template>
<div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Iniciar Sesión</h3>
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
          <label>Ingrese Password</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            required
          />
        </div>
        <br>
        <br>
        <div class="form-group">
          <button class="btn btn-primary">Entrar</button>
        </div>
      </form>
    </div>
  </div>

</template>
<script>

import axios from "axios";

export default {
  data() {
    return {
      passwordEscritoNuevamente:"",  
      usuario: {
        "nombre": "",
        "email": "",
        "password": "",
        "imagenPerfil": "",
        "tipo_usuario":"regular"
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/view");
          this.usuario = {
            "nombre": "",
            "email": "",
            "password": "",
            "imagenPerfil": "",
            "tipo_usuario":"regular"
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
||||||| merged common ancestors
=======
<template>
<div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Iniciar Sesión</h3>
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
          <label>Ingrese Password</label>
          <input
            type="password"
            class="form-control"
            v-model="usuario.password"
            required
          />
        </div>
        <br>
        <br>
        <div class="form-group">
          <button class="btn btn-danger btn-block">Entrar</button>
        </div>
      </form>
      
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
         
         this.resultado= res.data;
         if(this.resultado===null){
           this.salida="Credenciales erroneas o usuario no registrado en el sistema";
         }
         else{
            if (this.resultado.tipo_usuario=="regular"){
              this.$router.push("/cliente");
            }else if (this.resultado.tipo_usuario=="administrador")
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
>>>>>>> DESARROLLO

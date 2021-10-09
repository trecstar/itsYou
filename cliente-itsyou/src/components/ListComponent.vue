<template>
  <div>
    
      <nav class="nav-menu d-none d-lg-block">
        <ul>
         
               <li><a href="/cambiar">Cambiar contraseña</a></li>
          
        </ul>
      </nav>

        <h2 id="marca"> <span></span><h1 id="marca" class="marca"><a href="index.html">it's You  </a></h1> </h2>
        <br>
        <br>

        <div class="testimonial-item">
          
          <img src="../assets/img/user.png" alt="">
          
        </div>
        <br>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th>Nombre</th>
                <!-- <th>Lema</th>
                <th>Servicios</th>
                <th>Habilidaes</th>
                <th>Logros</th> -->
                <th>Email</th>
                <th>Celular</th>
                <th>Estado</th>
               <!--  <th>Portafolio</th> -->
                <th>Opciones</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="portafolio in portafolios" :key="portafolio._id">
                <td>{{ portafolio.name }}</td>
               <!--  <td>{{ portafolio.lema }}</td>
                <td>{{ portafolio.servicio }}</td>
                <td>{{ portafolio.habilidad }}</td>
                <td>{{ portafolio.logro }}</td> -->
                <td>{{ portafolio.email }}</td>
                <td>{{ portafolio.phone }}</td>
                <td>{{ portafolio.estado }}</td>
                
                <td class="align-top">
                  <router-link
                    :to="{ name: 'ver', params: { id: portafolio._id } }"
                    >
                    <img src="../assets/img/ojo.png" width=”100″ height=”100″ >
                  </router-link>
                  
                
                  
                  <button
                    @click.prevent="deleteportafolio(portafolio._id)"
                    class="btn btn-warning"
                  >
                    Borrar
                  </button>

                <button v-if="portafolio.estado=='PENDIENTE'"
                  @click.prevent="autorizarPortafolio(portafolio, portafolio._id)"
                  class="btn btn-warning"
                >
                  Autorizar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
  </template>

<script>
import axios from "axios";
import ruta from '../rutaAPI';

export default {
  data() {
    return {
      portafolios: [],
    };
  },
  created() {
    let apiURL = `${ruta.ruta_api}/api`;
    axios
      .get(apiURL)
      .then((res) => {
        this.portafolios = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteportafolio(id) {
      let apiURL = `${ruta.ruta_api}/api/delete-portafolio/${id}`;
      let indexOfArrayItem = this.portafolios.findIndex((i) => i._id === id);

      if (window.confirm("Realmente desea borrar?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.portafolios.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
     autorizarPortafolio(portafolio, id) {
      
      let apiURL = `${ruta.ruta_api}/api/update-portafolio/${id}`;

      if (window.confirm("Realmente desea autorizar?")) {
      let filtro={estado:"AUTORIZADO"}
      portafolio.estado= "AUTORIZADO";
      axios
        .put(apiURL, filtro)
        .then((res) => {
          console.log(res);
          //this.$router.push("/cliente");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    },
  },

};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>

<template>
  <div>
      <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Visualizar Portafolio</h3>
        <form>
          <div class="form-group">
              <label>Nombre</label>
              <input
                type="text"
                class="form-control"
                v-model="portafolio.name"
                required
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
              />
              <br>
              <label>Celular</label>
              <input
                type="text"
                class="form-control"
                v-model="portafolio.phone"
                required
                disabled
              />
              
            </div>
            <br>
          <button
                    @click.prevent="reenvio"
                    class="btn btn-warning"
                  >
                    Regresar
                  </button>
        </form>
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
      portafolio: {},
    };
  },
  created() {
    let apiURL = `${ruta.ruta_api}/api/edit-portafolio/${this.$route.params.id}`;
    
    axios.get(apiURL).then((res) => {
      this.portafolio = res.data;
    });
  },
  methods: {
   reenvio(){
   this.$router.go(-1);

   }
  },
};
</script>

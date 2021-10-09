<template>
    <div class="testimonials container">

      <div class="section-title">
        <h2>Perfiles publicados</h2>
      </div>

      <div v-for="portafolio in portafolios" :key="portafolio._id">

              
        <div class="testimonial-item">
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            {{portafolio.servicio}} -- {{portafolio.phone}}
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
         <router-link
                    :to="{ name: 'ver', params: { id: portafolio._id } }"
                    
                    >
                    <img src="../assets/img/ojo.png" class="testimonial-img" title="mostrar portafolio">
                  </router-link>
          <h3>{{portafolio.name}}</h3>
          <h4>{{portafolio.lema}}</h4>
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
      portafolios: [],
    };
  },
  created() {
    
    let apiURL = `${ruta.ruta_api}/api/portafolios-autorizados`;
    axios
      .get(apiURL)
      .then((res) => {
        this.portafolios = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },


};
</script>


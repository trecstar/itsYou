<template>
  <div>
    
    <div class="row">
      <div class="col-md-12">
        <br>
          <div>
            <h6><a href="/CreateComponent">Crear nuevo portafolio</a></h6>
          </div>
        
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Nombre</th>
              <th>Lema</th>
              <th>Servicios</th>
              <th>Habilidaes</th>
              <th>Logros</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in Students" :key="student._id">
              <td>{{ student.name }}</td>
              <td>{{ student.lema }}</td>
              <td>{{ student.servicio }}</td>
              <td>{{ student.habilidad }}</td>
              <td>{{ student.logro }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>
                <router-link
                  :to="{ name: 'edit', params: { id: student._id } }"
                  class="btn btn-primary"
                  >Editar
                </router-link>
                <button
                  @click.prevent="deleteStudent(student._id)"
                  class="btn btn-warning"
                >
                  Borrar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    

    
      
  </div>


  </div>
  
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Students: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/api/delete-student/${id}`;
      let indexOfArrayItem = this.Students.findIndex((i) => i._id === id);

      if (window.confirm("Realmente desea borrar?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Students.splice(indexOfArrayItem, 1);
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

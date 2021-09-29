<template>
   <div>
  
    <!-- <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">MEVN Stack Example</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/"
              >Create Student</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">View Students</router-link>
          </li>
        </ul>
      </div>
    </nav> -->
    <!--  <header id="header" class="header-tops"> -->
    <div class="container">
     
      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <!-- <li class="active"><a href="#header">Portada</a></li> -->
          <li><a href="/portada">Portada</a></li>
          <li><a href="/portafolios">Portafolios</a></li>
          <li><router-link to="/nosotros">Nosotros</router-link></li>
          <li><a href="/sesion">Iniciar Sesión</a></li>
          <li><router-link to="/registro-usuario"> Registrar Cuenta</router-link></li>
          <li><a href="/contacto">Contacto</a></li>
          <!-- <li><a href="/cliente">Cliente</a></li>
          <li><a href="/administrador">Administrador</a></li> -->
        </ul>
      </nav>
    </div>
      
    <div class="container mt-5">
      <router-view></router-view>
    </div>
    </div>
</template>

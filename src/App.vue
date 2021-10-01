<template>
   <div>
  
    
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
          <li><a href="/CreateComponent">Cliente</a></li>
          <li><a href="/administrador">Administrador</a></li>
        </ul>
      </nav>
    </div>
      
    <div class="container mt-5">
      <router-view></router-view>
    </div>
    </div>
</template>

<template>
    <div class="container">

      <div class="section-title">
        <h2>Contacto</h2>
        <p>Canales de contacto</p>
      </div>

      <div class="row mt-2">

        
        <div class="col-md-6 mt-4 d-flex align-items-stretch">
          <div class="info-box">
            <i class="bx bx-envelope"></i>
            <h3>Correo Electrónico</h3>
            <h3>appitsyou@gmail.com</h3>
          </div>
        </div>
        
      </div>

      <form action="forms/contact.php" method="post" role="form" class="php-email-form mt-4">
        <div class="form-row">
          <div class="col-md-6 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div class="validate"></div>
          </div>
          <br>
          <div class="col-md-6 form-group">
            <input type="email" class="form-control" name="email" id="email" placeholder="Correo electrónico" data-rule="email" data-msg="Please enter a valid email" />
            <div class="validate"></div>
          </div>
        </div>
        <br>
        <div class="form-group">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
          <div class="validate"></div>
        </div>
        <br>
        <div class="form-group">
          <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
          <div class="validate"></div>
        </div>
        <br>
        <br>
        <div class="text-center"><button type="submit">Enviar</button></div>
      </form>

    </div>
</template>
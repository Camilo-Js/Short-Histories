<script>
  import { goto } from '$app/navigation';
</script>

<section class="form-register">
    <h4>Formulario de Registro</h4>
    <form id="register-form">
      <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" required>
      <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido" required>
      <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" required>
      <input class="controls" type="password" name="contrasena" id="contrasena" placeholder="Ingrese su Contraseña" required>
      <input class="controls" type="Telefono" name="cTelfono" id="contrasena" placeholder="Ingrese su numero de telefono" required>
      <p>Estoy de acuerdo con <a href="#">Términos y Condiciones</a></p>
      <button onclick={()=>goto('/Libros')}>Registrate</button>
      <p><a href="1.InicioSesion.html">¿Ya tengo Cuenta?</a></p>
    </form>
  </section>
 
  <style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .form-register {
    width: 400px;
    background: #4b7daf3f;
    padding: 30px;
    margin: auto;
    margin-top: 100px;
    border-radius: 4px;
    font-family: 'calibri';
    color: rgb(255, 255, 255);
    box-shadow: 7px 13px 37px #000000;
  }
  
  .form-register h4 {
    font-size: 22px;
    margin-bottom: 20px;
  }
  
  .controls {
    width: 100%;
    background: #f7f7f7b2;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 16px;
    border: 1px solid #ffffff;
    font-family: 'calibri';
    font-size: 18px;
    color: rgb(0, 0, 0);
  }
  
  .form-register p {
    height: 40px;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
  }
  
  .form-register a {
    color: white;
    text-decoration: none;
  }
  
  .form-register a:hover {
    color: white;
    text-decoration: underline;
  }
  
  .form-register .botons {
    width: 100%;
    background: #013336a8;
    border: none;
    padding: 12px;
    color: white;
    margin: 16px 0;
    font-size: 16px;
  }

  .botons:hover {
    background-color: #83cdff8c;
    cursor: pointer;
    border: 1px solid #666; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
  }
  </style>
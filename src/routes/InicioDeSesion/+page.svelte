<svelte:head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Short Histories</title>
</svelte:head>

<script>
	import { goto } from "$app/navigation";
	let contenedor = $state(false);
	let muestra = $state(false);
</script>

<div class="container-form register">
	<div class="information">
		<div class="info-childs">
			<h2>Short Histories</h2>
			<p>!Bienvenido¡ Para unirte a nuestra comunidad por favor inicia sesión con tus datos</p>
			<button onclick={() => goto('/Registro')}>Registrate</button>
		</div>
	</div>
	<div class="form-information">
		<div class="form-information-childs">
			<h2>Entra a tu Cuenta</h2>
			<div class="icons">
				<i class='bx bxl-google'></i>
				<i class='bx bxl-github'></i>
				<i class='bx bxl-linkedin' ></i>
			</div>

			<p>o usa tu email para registrarte</p>
			<form action='?/inicioSesion' method="post" class="form form-register">
				<div>
					<label>
						<i class="bx bx-user"></i>
						<input type="text" placeholder="Nombre Usuario" name="userName" />
					</label>
				</div>
				<div>
					<label>
						<i class="bx bx-envelope"></i>
						<input type="email" placeholder="Correo Electronico" name="userEmail" />
					</label>
				</div>
				<div>
					<label>
						<i class="bx bx-lock-alt"></i>
						<input type="password" placeholder="Contraseña" name="userPassword" />
					</label>
				</div>
				<button>Iniciar Sesion</button>
			</form>
		</div>
	</div>
</div>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-image: url(a.jpg);
      background-size: cover;
  }
  
  .container-form {
    display: flex;
    border-radius: 20px;
    box-shadow: 0 5px 7px rgba(0, 0, 0, .1);
    height: 500px;
    max-width: 900px;
    transition: all 1s ease;
    margin: 10px;
  }
  
  .information {
    width: 40%;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #c7eef3;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  
  .info-childs {
    width: 100%;
    padding: 0 30px;
  }
  
  .info-childs h2 {
    font-size: 2.5rem;
    color: #333;
  }
  
  .info-childs p {
    margin: 15px 0 ;
    color: #555;
  }
  
  .info-childs input {
    background-color: transparent;
    outline: none;
    border: solid 2px #9191bd;
    border-radius: 20px;
    padding: 10px 20px;
    color: #9191bd;
    cursor: pointer;
    transition: background-color .3s ease;
  }
  
  .info-childs input:hover {
    background-color: #9191bd;
    border: none;
    color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  }
  
  .form-information {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    text-align: center;
    background-color: #f8f8f8;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  
  .form-information-childs {
    padding: 0 30px;
  }
  
  .form-information-childs h2 {
    color: #333;
    font-size: 2rem;
  }
  
  .form-information-childs p {
    color: #555;
  }
  
  .icons {
    margin: 15px 0;
  }
  
  .icons i {
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
    margin: 0 10px;
    color: #9191bd;
    border: solid thin #9191bd;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  }
  
  .icons i:hover {
    background-color: #646485;
    color: #fff;
  }
  
  .form {
    margin: 30px 0 0 0;
  }
  
  .form label {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border-radius: 20px;
    padding: 0 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  }
  
  .form label input {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: none;
    outline: none;
    border-radius: 20px;
    color: #333;
  }
  
  .form label i {
    color: #a7a7a7;
  }
  
  .form input[type="submit"] {
    background-color: #9191bd;
    color: #fff;
    border-radius: 20px;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    margin-top: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
  }
  
  .form input[type="submit"]:hover {
    background-color: #7a7a9a;
  }
  
  .hide {
    position: absolute;
    transform: translateY(-300%);
  }
  
  /*PERSONALIZACION DE ALERTAS Y MENSAJES */

  
  .form > .alerta-error,
  .form > .alerta-exito {
    display: none;
    padding: .5rem 1rem;
    margin-top: 10px;
    font-weight: 500;
    font-size: .8rem;
  }
  
  /*RESPONSIVE FORM*/
  
  @media screen and (max-width:750px) {
    html {
      font-size: 12px;
    }
  }
  
  @media screen and (max-width:580px) {
    html {
      font-size: 15px;
    }
  
    .container-form {
      height: auto;
      width: 80%;
      flex-direction: column;

    }
  
    .information {
      width: 100%;
      padding: 40px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0;
    }
  
    .form-information {
      width: 100%;
      padding: 20px;
      border-bottom-left-radius: 20px;
      border-top-right-radius: 0;
    }
  }
  
</style>

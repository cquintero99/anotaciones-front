cargarLogin()
function cargarLogin(){
    body=`<div class="container-fluid">
    <div class="row main-content bg-success text-center">
        <div class="col-md-4 text-center company__info">
            <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
            <h4 class="company_title"></h4>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid" id="formulario">
                <div class="row p-3">
                    <h1><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="text-primary bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg></h1>
                    <h2>Iniciar Sesion</h2>
                </div>
                <div class="row">
                    <form control="" class="form-group" >
                        <div class="row">
                            <input type="email" name="username" id="username" class="form__input" placeholder="Correo" required>
                        </div>
                        <div class="row">
                            <!-- <span class="fa fa-lock"></span> -->
                            <input type="password" name="password" id="password" class="form__input" placeholder="Password" required>
                        </div>
                       
                        <div class="row text-center">
                            <input type="buttom" value="ENTRAR" class="btnL btn " onclick="iniciarSesion()">
                        </div>
                    </form>
                </div>
                <div class="row" id="alertLogin"></div>
                <div class="row">
                    <p>No esta registrado? <a href="#" onclick="formularioRegistro()">Crear Cuenta</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid text-center footer">
<img src="./img/MY NOTEBOOKS (1).png"  width="400px" height="400px"  class="img-fluid"  alt="codigo QR MY NOTEBOOKS">
                   
</div>`
document.getElementById("login").innerHTML=body;
}

function formularioRegistro(){


    body=
    `                   <div class="row p-3">
                        <h1><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="text-primary bi bi-person-add" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                        <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                      </svg></h1>
                        <h2>Crear Cuenta</h2>
                       </div>
                      <div class="row">
                       <form control="" class="form-group" >
                        <div class="row">
                            <input type="text" name="nombre" id="nombre" class="form__input " placeholder="Nombre">
                        </div>
                        <div class="row">
                            <input type="text" name="apellido" id="apellido" class="form__input" placeholder="Apellido">
                        </div>

                        
                        <div class="row">
                        
                        <label for="remember_me">Fecha Nacimiento</label>
                        <input type="date" name="fechaNacimiento" id="fechaNacimiento" class="form__input " >
                        </div>
                        <div class="row">
                            <input type="text" name="correo" id="correo" class="form__input" placeholder="Correo">
                        </div>
                        
                        <div class="row"
                            <span class="fa fa-lock"></span> 
                            <input type="password" name="password" id="password" class="form__input" placeholder="Password">
                        </div>
                                <div class="row form-floating">
                                <select class="form-select" id="selectGenero" aria-label="Floating label select example">
                                    
                                    <option value="1" selected>Masculino</option>
                                    <option value="2">Femenino</option>
                                    <option value="3">No responder</option>
                                </select>
                                <label for="floatingSelect">Seleccione su genero</label>
                                </div>

                        <div class="row p-3">
                            <input type="checkbox" name="remember_me" id="remember_me" class="">
                            <label for="remember_me">Acepto terminos y condiciones</label>
                        </div>
                        <div class="row ">
                            <input type="buttom" value="REGISTRAR" class="btnL btn-lg" onclick="newUser()">
                            </div>
                            </form>
                            </div>
                            <div class="row">
                                <p>Ya tengo una cuenta! <a href="#" onclick="cargarLogin()">Iniciar Sesion</a></p>
                            </div>
    `
    document.getElementById("formulario").innerHTML=body
}

function formularioLogin(){
    body=`<div class="row p-3">
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="text-primary bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
  </svg></h1>
    <h2>Iniciar Secion</h2>
</div>
<div class="row">
    <form control="" class="form-group" >
        <div class="row">
            <input type="text" name="username" id="username" class="form__input" placeholder="Correo" required>
        </div>
        <div class="row">
            <!-- <span class="fa fa-lock"></span> -->
            <input type="password" name="password" id="password" class="form__input" placeholder="Password" required>
        </div>
        
        <div class="row text-center">
            <input type="buttom" value="Entrar" class="btnL" onclick="iniciarSesion()">
        </div>
    </form>
</div>
<div class="row">
    <p>No estas registrado? <a href="#" onclick="formularioRegistro()">Crear Cuenta</a></p>
</div>`

document.getElementById("formulario").innerHTML=body

}
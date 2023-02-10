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
                    <h2>Iniciar Sesion</h2>
                </div>
                <div class="row">
                    <form control="" class="form-group" >
                        <div class="row">
                            <input type="text" name="username" id="username" class="form__input" placeholder="Correo">
                        </div>
                        <div class="row">
                            <!-- <span class="fa fa-lock"></span> -->
                            <input type="password" name="password" id="password" class="form__input" placeholder="Password">
                        </div>
                       
                        <div class="row text-center">
                            <input type="buttom" value="ENTRAR" class="btnL btn " onclick="iniciarSesion()">
                        </div>
                    </form>
                </div>
                <div class="row">
                    <p>No esta registrado? <a href="#" onclick="formularioRegistro()">Crear Cuenta</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid text-center footer">
 <a href="#">MY NOTEBOOK</a></p>
</div>`
document.getElementById("login").innerHTML=body;
}

function formularioRegistro(){


    body=
    `                   <div class="row p-3">
                        <h2>Crear Cuenta</h2>
                       </div>
                      <div class="row">
                       <form control="" class="form-group" >
                        <div class="row">
                            <input type="text" name="nombre" id="nombre" class="form__input" placeholder="Nombre">
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
                        <div class="row">
                            <input type="checkbox" name="remember_me" id="remember_me" class="">
                            <label for="remember_me">Acepto terminos y condiciones</label>
                        </div>
                        <div class="row ">
                            <input type="buttom" value="REGISTRAR" class="btnL btn-lg" onclick="newUser()">
                            </div>
                            </form>
                            </div>
                            <div class="row">
                                <p>Ya tengo una cuenta! <a href="#" onclick="formularioLogin()">Iniciar secion</a></p>
                            </div>
    `
    document.getElementById("formulario").innerHTML=body
}

function formularioLogin(){
    body=`<div class="row p-3">
    <h2>Iniciar Secion</h2>
</div>
<div class="row">
    <form control="" class="form-group" >
        <div class="row">
            <input type="text" name="username" id="username" class="form__input" placeholder="Correo">
        </div>
        <div class="row">
            <!-- <span class="fa fa-lock"></span> -->
            <input type="password" name="password" id="password" class="form__input" placeholder="Password">
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
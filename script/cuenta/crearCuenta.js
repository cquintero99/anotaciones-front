function newUser(){
    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let fecha_nacimiento=document.getElementById("fechaNacimiento").value
    let correo=document.getElementById("correo").value
    let password=document.getElementById("password").value
    let fecha_registro=new Date()
    let select=document.getElementById("selectGenero")
    let genero=select.options[select.selectedIndex].text
    
    

    const user={
        nombre,
        apellido,
        fecha_nacimiento,
        correo,
        contraseña:password,
        fecha_registro,
        rol: {
            "id": 2,
            "nombre": "USER"
        },
        estado:"ONLINE",
        genero
    }
    //console.log(user)
  saveUsuario(user)
}

async function saveUsuario(usuario){
    const result=await fetch(urlBasic+"/usuarios/save",{
        method:'POST',
        body:JSON.stringify(usuario),
        headers:{
            "Content-type":"Application/json"
        }
    })
    .then(response=>response.json())
    .then(newData=>{
        console.log(newData)
        Swal.fire({
            icon: 'success',
            title: 'CORRECTO',
            text: 'Cuenta creada con exito !',
            footer: '<a href="">Bienvenido</a>'
          })
          setTimeout(()=>{
            formularioLogin();
            document.getElementById("username").value=usuario.correo
            document.getElementById("password").value=usuario.contraseña
            iniciarSesion();

          },2000)
    })
    .catch(error=>{
        console.log(error)
    })
}
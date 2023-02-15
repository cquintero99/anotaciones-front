
 function iniciarSesion(){
    let email =document.getElementById("username").value
    let password=document.getElementById("password").value
    
    const auth={
        email,
        password
    }
    if(email!=="" && password!==""){
        verificoExisteCuenta(auth,email)

   // entrarCuenta(auth);
   
    }else{
        body=`<div class="alert alert-warning" role="alert">
        <a href="#" class="alert-link">CREDENCIALES INCOMPLETAS</a>
     </div>`
    document.getElementById("alertLogin").innerHTML=body;
         setTimeout(()=>{ document.getElementById("alertLogin").innerHTML="";
                    },4500)
    }

}



async function verificoExisteCuenta(auth,email){
    const result =await fetch("http://localhost:8088/usuarios/"+email+"/correo",)
    .then(res=>res.json())
    .then(data=>{
        
        if(data===true){
            entrarCuenta(auth)
        }else{
            body=`<div class="alert alert-danger" role="alert">
            <a href="#" class="alert-link">CUENTA NO ESTA REGISTRADA</a>
         </div>`
    document.getElementById("alertLogin").innerHTML=body;
         setTimeout(()=>{ document.getElementById("alertLogin").innerHTML="";
                    },4500)
        }

    })
    .catch(error=>{
        console.log(error)
    })
}

async function envioDatoslogin(auth){
    const result=await fetch('http://localhost:8088/login',{
        crossDomain:true,
        method: 'POST',
        body: JSON.stringify(auth),
        headers: {
                  'Content-type':'application/json Access-Control-Request-Method',
                  'Access-Control-Allow-Headers':'Authorization',
                  'Access-Control-Request-Method': 'POST'
                  }
    })
    return result;
}

 function entrarCuenta(auth){
    envioDatoslogin(auth)
    .then(response=>response)
    .then(JWT=>{
        if (JWT.status === 200 && JWT.headers.has('Authorization')) {
            const bearerToken = JWT.headers.get('Authorization');
            const token = bearerToken.replace('Bearer ', '');
           


            localStorage.setItem('token', token);
            localStorage.setItem("data",JSON.stringify( parseJwt(token)))
            
            cargarMenu()
            listaMateria()
            setTimeout(()=>{
                    localStorage.clear()
                    location.reload()
            },JSON.parse(localStorage.getItem("data")).exp)
          } else {
            body=`<div class="alert alert-danger" role="alert">
             <a href="#" class="alert-link">CONTRASEÑA INCORRECTA</a>
          </div>`
    document.getElementById("alertLogin").innerHTML=body;
         setTimeout(()=>{ document.getElementById("alertLogin").innerHTML="";
                    },4500)
          }
    })
    .catch(err=>{
        console.log(err)
    })
}

function online(){
    var auxtoken=localStorage.getItem("token")
    var id=JSON.parse(localStorage.getItem("data")).id
    if(auxtoken!==undefined && id!==undefined  ){
        
        cargarMenu()
        listaMateria()
    }

}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
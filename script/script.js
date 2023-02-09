
async function listaMateria() {
   // history.pushState(null, "", "materias/index.html");
   // location.replace('https://code.tutsplus.com');
 //  var stateObj = { foo: "materias" };
//history.pushState(stateObj, "page 2", "materias.html");
    document.getElementById("resumenMateria").innerHTML=""
    document.getElementById("rootNotas").innerHTML=""
    document.getElementById("login").innerHTML=""
    localStorage.setItem("idMateria","")
    let token=localStorage.getItem("token")
    let id=JSON.parse(localStorage.getItem("data")).id
  const result = await fetch("http://localhost:8088/usuarios/"+id+"/all",{
    headers:{
      'Authorization': 'Bearer ' + token
  }
  })
    .then((data) => data.json())
    .then((res) => cargarMateria(res))
    .catch((err) => console.log(err));
 
}
let count=0;
function cargarColor(){
    if(count>5)count=0;
    return count++;
}

function cargarMateria(data) {
  let body = "";
  const color=["orange","purple","brown","yellow","green","blue"]
  let idUsuario=1
  let rol="Invitado"
  for (let i = 0; i < data.length; i++) {

    const n=0
    if(idUsuario===data[i].usuario_id){
      rol="Creador"
    }else{
      rol="Invitado"
    }
    let nombre=data[i].materia.nombre;
    if(nombre.length>=15){
      nombre=nombre.substr(0,12)+"..."
    }
    body += ` 
    
<div class="col-md-4 col-sm-6 content-card">
    
    <div class="card-big-shadow" style="max-width: 540px;">
        
         <div class="card card-just-text" data-background="color" data-color="${color[cargarColor()]}" data-radius="none">
           
                    
                                  <div class="content">
                                          <p><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                                          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                                        </svg></p>
                                          <h4 class="title"><a href="#" onclick="listaNotas(${data[i].materia.id})"> ${nombre}</a></h4>
                                          <h6 class="category">${data[i].materia.codigo} - ${data[i].materia.grupo}</h6>
                                          <p class="description">Docente: </p>
                                          <p class="description">${data[i].materia.profesor}</p>
                                          <p>${rol}</p>
                                          
                                  </div>
                                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                  <div class="floating-container">
                                                    <div class="floating-button"><i class="material-icons">settings</i></div>
                                                <div class="element-container">
                                                
                                                    <a href="#" onclick="eliminarMateria(${data[i].materia.id})"> <span class="float-element tooltip-left" >
                                                      <i class="material-icons">delete
                                                      </i></a>
                                                    </span>
              
                                                    
                                                      <span class="float-element" onclick="modalMateria(${data[i].materia.id})" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                                      
                                                      <i class="material-icons">autorenew
                                                    </i>
                                                    </span>
              
                                                      <span class="float-element">
                                                      <i class="material-icons">group</i>
                                                    </span>
                                                    
                                                </div>
                                        </div>    
              
                                    
                                  
                                  
                                  </div>  
                                  
           
        </div> 
        
    </div>
</div>

        
        `;
        
  
}
  document.getElementById("root").innerHTML = body;
  cargarModalMateria()
}








function recargar(){
    listaMateria()
    
}
$('.botonF1').hover(function(){
  $('.btnB').addClass('animacionVer');
})
$('.contenedor').mouseleave(function(){
  $('.btnB').removeClass('animacionVer');
})




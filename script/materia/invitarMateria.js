 function modalInvitar(materia){
    let id=JSON.parse(localStorage.getItem("data")).id
  
   
     buscarMisSeguidores()
     .then(res=>res.json())
     .then(data=>{
        buscarAmigoLista(data,materia)
         cargarBusquedaAmigos(data,materia)

       
     })
     .catch(err=>console.log(err))

   
}

function cargarBusquedaAmigos(data,materia){
    
   integrantesMateria(materia)
   .then(res=>res.json())
    .then(amigos=>{
     const arregloId=[]
     for (let i = 0; i < amigos.length; i++) {
 
         arregloId.push(amigos[i].usuario_id)
     }
     //LISTA DE INTEGRANTES DE LA MATERIA
    const colorNotas=["l-bg-cherry","l-bg-blue-dark","l-bg-green-dark","l-bg-orange-dark","l-bg-cyan","l-bg-green","l-bg-orange","l-bg-cyan2"]
  
    let body=""
 
    for (let i = 0; i < data.length; i++) {
       if(arregloId.includes(data[i].seguidor_id.id)){
           body+=
           `  <li class="widget-49-meeting-item "><span>
           <div class="card  card-margin ${colorNotas[random()]}  text-center"  style="max-width: 340px;"  >
              <a href="#"  class="text-light p-1" onclick="deleteUserMateria('${data[i].seguidor_id.nombre}',${materia})">    
              <p class="text-center fw-bold">${data[i].seguidor_id.nombre} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
            </svg></p> </a>
           
           <p class="text-center">COMPAÑERO</p>
           </div>
           </span></li>
                      
                     `

       }else{
        body+=
        `  <li class="widget-49-meeting-item "><span>
        <div class="card  card-margin ${colorNotas[random()]}  text-center"  style="max-width: 340px;" onclick="addUserMateria('${data[i].seguidor_id.nombre}',${materia},${data[i].seguidor_id.id})" >
           <a href="#"  class="text-light p-1" >    
           <p class="text-center fw-bold">${data[i].seguidor_id.nombre} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
           <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
           <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
         </svg></p> </a>
         
        <p class="text-center">INVITAR</p>
        </div>
        </span></li>
                   
                  `
       }
        
    }

    document.getElementById("listaAmigos").innerHTML=body;
})
}


async function integrantesMateria(id){
    let token=localStorage.getItem("token")
    const resultIntegrantes=await fetch('http://localhost:8088/materia/'+id+'/integrantes',{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-type":"Application/json"
        }
    })
    return resultIntegrantes;
    
    
}

function buscarAmigoLista(data,idMateria){
    const string=document.getElementById("buscarAmigosLista")
    string.addEventListener('input',()=>{
        
            if(string.value.length===0){
                
    document.getElementById("listaAmigos").innerHTML="";
            }
            if(string.value.length>0 && data!==undefined){
                
            let data2=data.filter(data=>data.seguidor_id.correo.toLowerCase().includes(string.value.toLowerCase())); 
            cargarBusquedaAmigos(data2,idMateria)
            }
              
    
    })
   

}


function addUserMateria(nombre,idMateria,idUsuario){
    Swal.fire({
        title: 'INVITAR A:',
        text: ""+nombre,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Invitar!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetchAddUserMateria(idMateria,idUsuario)
        
        }
      })

}
async function fetchAddUserMateria(idMateria,idUsuario){
    //let id=JSON.parse(localStorage.getItem("data")).id
    let token=localStorage.getItem("token")
    const userMateria={
        materia:{
            id:idMateria
        },
        usuario_id:idUsuario
    }
    const result =await fetch('http://localhost:8088/user/materia',{
        method:'POST',
        body:JSON.stringify(userMateria),
        headers:{
            "Authorization":"Bearer "+token,
            "Content-type":"Application/json"
        }

    })
    .then(response=>response.json())
    .then(data=>{
        let body=
        `<div class="alert alert-success" role="alert">
        <a href="#" class="alert-link text-center">AMIGO REGISTRADO</a>
     </div>`
          document.getElementById("alertMateriaAmigo").innerHTML=body
          document.getElementById("listaAmigos").innerHTML="";
          setTimeout(()=>{
            document.getElementById("alertMateriaAmigo").innerHTML=""
            
            
       
          },4500)
    })
    .catch(err=>{
        console.log(err)
    })


}
function deleteUserMateria(nombre,idMateria){
    Swal.fire({
        title: 'Eliminar Del grupo?',
        text: ""+nombre,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            console.log(" "+nombre+" "+idMateria)
            let body=
        `<div class="alert alert-danger" role="alert">
        <a href="#" class="alert-link text-center">AMIGO ELIMINADO</a>
     </div>`
          document.getElementById("alertMateriaAmigo").innerHTML=body
          
          document.getElementById("alertMateriaAmigo").innerHTML=""
          setTimeout(()=>{
            
              document.getElementById("listaAmigos").innerHTML="";
       
          },4500)
          
          
        }
      })
    
 

}

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
  
    let body=""
 
    for (let i = 0; i < data.length; i++) {
       if(arregloId.includes(data[i].seguidor_id.id)){
           body+=
           `  <li class="widget-49-meeting-item "><span>
           <div class="card box2 card-margin ${colorNotas[random()]}  text-center"  style="max-width: 400px;"  >
              <a href="#"  class="text-light p-1" >    
              <p class="text-center fw-bold">${data[i].seguidor_id.nombre} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
            </svg></p> </a>
           
           <p class="text-center">COMPAÑERO</p>
           <div class="box-content">
           <div class="inner-content">
               <ul class="icon">
                   <li><a href="#" class="bg-danger text-light" onclick="deleteUserMateria('${data[i].seguidor_id.nombre}',${materia},${data[i].seguidor_id.id})"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                 </svg></a></li>
               </ul>
           </div>
       </div>
           </div>
           </span></li>
           
                      
                     `

       }else{
        body+=
        `  <li class="widget-49-meeting-item " ><span>
        <div class="card box2 card-margin ${colorNotas[random()]}  text-center"  style="max-width: 400px;" >
           <a href="#"  class="text-light p-1" >    
           <p class="text-center fw-bold">${data[i].seguidor_id.nombre}</p> </a>
         
        <p class="text-center">INVITAR</p>
        <div class="box-content">
        <div class="inner-content">
            <ul class="icon">
                <li><a href="#" class="bg-success text-light" onclick="addUserMateria('${data[i].seguidor_id.nombre}',${materia},${data[i].seguidor_id.id})" ><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
              </svg></a></li>
            </ul>
        </div>
    </div>
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
    const resultIntegrantes=await fetch(urlBasic+'/materia/'+id+'/integrantes',{
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
        usuario_id:{
            id:idUsuario
        },
        
    }
    const result =await fetch(urlBasic+'/user/materia',{
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
function deleteUserMateria(nombre,idMateria,idUsuario){
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
           esIntegrante(idMateria,idUsuario)
         
          
          
        }
      })
    
 

}
 function esIntegrante(idMateria,idUsuario){
    integrantesMateria(idMateria)
            .then(res=>res.json())
            .then(integrantes=>{
               // console.log(integrantes)
               const data2 = integrantes.filter(integrantes => integrantes.usuario_id===idUsuario);
                  
                if(data2[0].id>0){
               deleteCompañero(data2[0].id)
                  
                }
            })
}
async function deleteCompañero(id){
    let token=localStorage.getItem("token")
    const result= await fetch(urlBasic+"/user/materia/"+id,{
        method:'DELETE',
        headers:{
            "Authorization":"Bearer "+token,
            "Content-type":"Application/json"
        }
    })
    .then(res=>res.json())
    .then(salio=>{
        
        let body=
        `<div class="alert alert-danger" role="alert">
        <a href="#" class="alert-link text-center">COMPAÑERO EXPULSADO</a>
     </div>`
          document.getElementById("alertMateriaAmigo").innerHTML=body
          
          document.getElementById("listaAmigos").innerHTML="";
          
          setTimeout(()=>{
            
          document.getElementById("alertMateriaAmigo").innerHTML=""
       
          },4500)

    })
}
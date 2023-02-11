function buscarPorCorreo(){

    const correo= document.getElementById("buscarUserCorreo")
    
                allUsers()
                .then(response=>response.json())
                .then(data=>{
                    correo.addEventListener('input', function(){
                        if(correo.value.length===0){
                            document.getElementById("rootBuscar").innerHTML="";
                        }
                        if(correo.value.length>0 && correo.value!=="@"){
    
                        let aux=data.correo
                        let data2 = data.filter(data => data.correo.toLowerCase().includes(correo.value.toLowerCase()));
                        
                        mostrarBusqueda(data2)
                        }
                });
    
    
                })
                .catch(err=>console.log(err))
    
        
        
    }

async function buscarMisSeguidores(id){
    let token=localStorage.getItem("token")
    let idUser=JSON.parse(localStorage.getItem("data")).id
    const result=await fetch("http://localhost:8088/usuarios/"+idUser+"/sigo",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-type":"Application/json"
        }
    })
    return result;
}


    
    function mostrarBusqueda(data){
        let body=""
        const colorNotas=["l-bg-cherry","l-bg-blue-dark","l-bg-green-dark","l-bg-orange-dark","l-bg-cyan","l-bg-green","l-bg-orange","l-bg-cyan2"]
        let id=JSON.parse(localStorage.getItem("data")).id
        buscarMisSeguidores()
                .then(res=>res.json())
                .then(data2=>{

                    const miArreglo=[]
                    for (let i = 0; i < data2.length; i++) {
                    miArreglo.push(data2[i].seguidor_id.id)
                        
                    }

            for (let i = 0; i < data.length; i++) {
            if(data[i].id!=id){
                
                //buscarMisSeguidores(data[i].id)
                //console.log(localStorage.getItem("amigo")+" nombre"+data[i].nombre)
                let nombre=data[i].nombre
                
                  if(miArreglo.includes(data[i].id)){
                    body+=` 
                    <li class="widget-49-meeting-item "><span>
                    <div class="card  card-margin ${colorNotas[random()]} "  style="max-width: 240px;"  >
                       <a href="#"  class="text-light p-1" >    
                       <p class="text-center fw-bold">${data[i].nombre} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                       <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                       <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                     </svg></p> </a>
                     
                    <p class="text-center">AMIGO</p>
                    </div>
                    </span></li>
                                          
                          `
                  }else{
                    body+=` 
                    <li class="widget-49-meeting-item " id="${data[i].id}"><span>
                    <div class="card  card-margin ${colorNotas[random()]} "  style="max-width: 240px;"  >
                       <a href="#"  class="text-light p-1" onclick="agregarAmigo(${data[i].id},'${nombre}')" >    
                       <p class="text-center fw-bold">${data[i].nombre} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                       <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                       <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                     </svg></p> </a>
                     
                    <p class="text-center">AGREGAR</p>
                    </div>
                    </span></li>
                                          
                          `
                    
                  }
                   


                      
      
            }
        }
       
    
        document.getElementById("rootBuscar").innerHTML=body;
    })
    }
    function agregarAmigo(id,nombre){
        
        Swal.fire({
            title: 'Agregar amigo?',
            text: ""+nombre,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, agregar!'
          }).then((result) => {
            if (result.isConfirmed) {
                saveAmigo(id)
            }
          })
    }

    async function saveAmigo(idAmigo){
        let id=JSON.parse(localStorage.getItem("data")).id

        const seguidor={
            usuario_id:{
                id:id
            },
            seguidor_id:{
                id:idAmigo
            }

        }
        let token=localStorage.getItem("token")
        const result= await fetch("http://localhost:8088/seguidores",{
            method:'POST',
            body:JSON.stringify(seguidor),
            headers:{
                "Authorization":"Bearer "+token,
                "Content-type":"Application/json"
                
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("REGISTRO SEGUIDOR"+data)
            let body=
            `<div class="alert alert-success" role="alert">
            <a href="#" class="alert-link">AMIGO REGISTRADO</a>
         </div>`
             document.getElementById("buscarUserCorreo").value=""
             document.getElementById("rootBuscar").innerHTML="";
            document.getElementById("alerRegistro").innerHTML=body;
            setTimeout(()=>{
                document.getElementById("alerRegistro").innerHTML="";
            },4500)
        })
        .catch(err=>{
            
            console.log("EROR REGISTRO SEGUIDOR")
        })

    }
    
    async function allUsers(string){
        let token=localStorage.getItem("token")
        const result=await fetch('http://localhost:8088/usuarios/lista',{
            headers:{
                "Authorization":"Bearer "+token,
                "Content-type":"Application/json"
            }
        })
        
        return result;
    
    }
    
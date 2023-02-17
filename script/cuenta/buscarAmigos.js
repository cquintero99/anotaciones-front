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
    const result=await fetch(urlBasic+"/usuarios/"+idUser+"/sigo",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-type":"Application/json"
        }
    })
    return result;
}


    
    function mostrarBusqueda(data){
        let body=""
       let id=JSON.parse(localStorage.getItem("data")).id
        buscarMisSeguidores()
                .then(res=>res.json())
                .then(data2=>{

                    const miArreglo=[]
                    const idSeguidor=[]
                    for (let i = 0; i < data2.length; i++) {
                    miArreglo.push(data2[i].seguidor_id.id)
                    idSeguidor.push(data2[i].id)
                        
                    }

            for (let i = 0; i < data.length; i++) {
                let nombre=data[i].nombre
            if(data[i].id!=id){
                
                //buscarMisSeguidores(data[i].id)
                //console.log(localStorage.getItem("amigo")+" nombre"+data[i].nombre)
               
                
                  if(miArreglo.includes(data[i].id)){
                    let idEntitiSeguidor=idSeguidor[miArreglo.indexOf(data[i].id)];
                    body+=` 
                    <li class="widget-49-meeting-item p-3 "><span>
                    <div class="card box8  card-margin ${colorNotas[cargarColor()]} "  style="max-width: 340px;"  >
                    <h3 class="title">${nombre}</h3>
                       <a href="#"  class="text-light p-1" >    
                       <p class="text-center fw-bold p-3">AMIGO</p> </a>
                     
                    <p class="text-center fw-bold "></p>
                    <div class="box-content">
                      <ul class="icon text-center"  onclick="eliminarAmigo(${idEntitiSeguidor},'${nombre}')">
                          <li  ><a href="#" > <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg> </a> </li>
                      </ul>
                  </div>
                    </div>
                    
                    </span></li>
                    
           
                                          
                          `
                  }else{
                    body+=` 
                
                    <li class="widget-49-meeting-item p-3 " id="${data[i].id}"><span>
                    <div class="card box7 card-margin ${colorNotas[random()]}  "  style="max-width: 340px;" >
                        
                    
                       <a href="#"  class="text-light p-3" >    
                       <p class="text-center fw-bold">AGREGAR</p>
                       <h5 class="text-center fw-bold ">${nombre} </h5> </a>
                     
                    
                    <div class="box-content">
                          <ul class="icon text-center" >
                              <li onclick="agregarAmigo(${data[i].id},'${nombre}')" ><a href="#"  ><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg></a></li>
                          </ul>
                      </div>
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
        const result= await fetch(urlBasic+"/seguidores",{
            method:'POST',
            body:JSON.stringify(seguidor),
            headers:{
                "Authorization":"Bearer "+token,
                "Content-type":"Application/json"
                
            }
        })
        .then(res=>res.json())
        .then(data=>{
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
    
    async function allUsers(){
        let token=localStorage.getItem("token")
        const result=await fetch(urlBasic+'/usuarios/lista',{
            headers:{
                "Authorization":"Bearer "+token,
                "Content-type":"Application/json"
            }
        })
        
        return result;
    
    }
    
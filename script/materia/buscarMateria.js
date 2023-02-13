 function btnBuscarMateria(){
    const materia=document.getElementById('inputIdmateria')
    let n=materia.value
    materia.addEventListener('input',function(){
       
      if(materia.value.length===0){
        document.getElementById("findMaterias").innerHTML="";
      }
        if(materia.value.length>0 && materia.value!==undefined){

        
        findByIdMateria(materia.value)
        .then(res=>res.json())
        .then(data=>{
          cargarIdMateria(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
        
    })
      
    

}
function cargarIdMateria(data){
    integrantesMateria(data.id)
    .then(res=>res.json())
     .then(amigos=>{
      const arregloId=[]
      for (let i = 0; i < amigos.length; i++) {
  
          arregloId.push(amigos[i].usuario_id)
      }
      console.log(arregloId)
      let idUsuario=JSON.parse(localStorage.getItem("data")).id
      const colorNotas=["l-bg-cherry","l-bg-blue-dark","l-bg-green-dark","l-bg-orange-dark","l-bg-cyan","l-bg-green","l-bg-orange","l-bg-cyan2"]
      
      let body=""
      if(arregloId.includes(idUsuario)){
        //verificar si la materia es publica o privada
        let rol="INVITADO"
        if(idUsuario===data.usuario_id){
            rol="CREADOR"
        }
      body=  `
        <div class="card box8  card-margin ${colorNotas[random()]} p-3 "  style="max-width: 350px;"  >
        <div class="p-5 ">
        <a href="#"  class="text-light p-1" >    
        <p class="text-center fw-bold p-3">PUBLICA</p> </a>
        <h3 class="title p-3">${data.nombre}</h3>
          
         
        <p class="text-center fw-bold ">${data.codigo} - ${data.grupo}</p>
        </div>
       
        <div class="box-content">
          <ul class="icon text-center" data-bs-dismiss="offcanvas"  >
              <li  ><a href="#"  > <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg> </a> </li>
            <li>${rol}</li>
          </ul>
      </div>
        </div>`
      }else{
     
       body= `
      <div class="card box8  card-margin ${colorNotas[random()]} p-3 "  style="max-width: 350px;"  >
      <div class="p-5 ">
      <a href="#"  class="text-light p-1" >    
      <p class="text-center fw-bold p-3">PUBLICA</p> </a>
      <h3 class="title p-3">${data.nombre}</h3>
        
       
      <p class="text-center fw-bold ">${data.codigo} - ${data.grupo}</p>
      </div>
     
      <div class="box-content">
        <ul class="icon text-center"  >
            <li  ><a href="#" data-bs-dismiss="offcanvas"  onclick="ingresarUsuarioMateria(${data.id} ,'${data.nombre}')" > <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg> </a> </li>
          <li>UNIRME</li>
        </ul>
    </div>
      </div>`
      
      }
      document.getElementById("findMaterias").innerHTML=body;
    })
   
    
}

function ingresarUsuarioMateria(idMateria,nombre){
    Swal.fire({
        title: 'UNIRME A:',
        text: ""+nombre,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Invitar!'
      }).then((result) => {
        if (result.isConfirmed) {
            postUsuarioMateria(idMateria)
        
        }
      })
}


async function postUsuarioMateria(idMateria){
    let idUsuario=JSON.parse(localStorage.getItem("data")).id
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
        <a href="#" class="alert-link text-center">MATERIA REGISTRADA</a>
     </div>`
          document.getElementById("alertMateriaId").innerHTML=body
          listaMateria()
          setTimeout(()=>{
            document.getElementById("alertMateriaId").innerHTML=""
            
            
       
          },3500)
    })
    .catch(err=>{
        console.log(err)
    })

}
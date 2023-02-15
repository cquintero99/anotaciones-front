async function cargarSeguidores(){
    let token=localStorage.getItem("token")
    let idUser=JSON.parse(localStorage.getItem("data")).id
    const result=await fetch("http://localhost:8088/usuarios/"+idUser+"/seguidores",{
        headers:{
            "Authorization":"Bearer "+token,
            "Content-type":"Application/json"
        }
    })
    return result;
}


function mostrarAmigos(){
    buscarMisSeguidores()
    .then(res=>res.json())
    .then(data=>{
        let body=`<h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>${data.length} - AMIGOS </h6>
        `
        for (let i = 0; i < data.length; i++) {
           body+=`<p class="fw-bold"><small>${data[i].seguidor_id.nombre}</small></p>
           <div class="progress mb-3" style="height: 5px">
             <div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
         `
            
        }
        document.getElementById("perfilAmigos").innerHTML=body
    })
    .catch(err=>{
        console.log(err)
    })
}
function mostrarSeguidores(){
    cargarSeguidores()
    .then(res=>res.json())
    .then(data=>{
        let body=`<h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>${data.length} - SEGUIDORES </h6>
        `
        for (let i = 0; i < data.length; i++) {
           body+=`<p class="fw-bold"><small>${data[i].usuario_id.nombre}</small></p>
           <div class="progress mb-3" style="height: 5px">
             <div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
           </div>
         `
            
        }
        document.getElementById("perfilSeguidores").innerHTML=body
    })
    .catch(err=>{
        console.log(err)
    })
}
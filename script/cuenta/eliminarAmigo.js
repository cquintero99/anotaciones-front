function eliminarAmigo(id,nombre){
    console.log(id," "+nombre)
    Swal.fire({
        title: 'Eliminar Amigo?',
        text: ""+nombre,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         deleteAmigoLista(id)
        }
      })
}

async function deleteAmigoLista(id){
    let token=localStorage.getItem("token")
    const result=await fetch(urlBasic+'/seguidores/'+id,{
        method:'DELETE',
        headers:{
            "Authorization":"Bearer "+token,
            "Content-type":"Application/json"
        }
    })
    .then(res=>res)
    .then(data=>{
        let body=
        `<div class="alert alert-danger" role="alert">
        <a href="#" class="alert-link">AMIGO ELIMINADO</a>
     </div>`
         document.getElementById("buscarUserCorreo").value=""
         document.getElementById("rootBuscar").innerHTML="";
        document.getElementById("alerRegistro").innerHTML=body;
        setTimeout(()=>{
            document.getElementById("alerRegistro").innerHTML="";
        },4500)

    })

}
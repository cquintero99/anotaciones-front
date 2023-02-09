function eliminarMateria(id){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Eliminar Materia?',
        text: "Se perderan todas las notas e informacion de la materia",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar!',
        cancelButtonText: 'No, Cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          
          deleteMateria(id)

        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'CANCELADO',
            'Se cancelo el proceso :)',
            'error'
          )
        }
      })
}

async function deleteMateria(id){
  let token=localStorage.getItem("token")
  const resultDelete= await fetch('http://localhost:8088/materia/'+id,{
    method:'DELETE',
    headers:{
      "Content-type":"Application/json",
      "Authorization":"Bearer "+token
    }
  })
  .then(res=>res.json())
  .then(data=>{
    console.log("ELIMINADA")
    Swal.fire({
      title: 'Materia Eliminada',
      icon: 'success',
      showCloseButton: true
    })
   setTimeout(recargar
   , 1500);

  })
  .catch(err=>{

  })
}
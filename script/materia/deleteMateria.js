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

function dejarMateria(id){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}
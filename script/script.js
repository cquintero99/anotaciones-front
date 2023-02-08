
async function listaMateria() {
    document.getElementById("resumenMateria").innerHTML=""
    document.getElementById("rootNotas").innerHTML=""
    document.getElementById("login").innerHTML=""
  const result = await fetch("http://localhost:8088/materia")
    .then((data) => data.json())
    .then((res) => cargarMateria(res))
    .catch((err) => console.log(err));
 
}
let count=0;
function cargarColor(){
    if(count>5)count=0;
    return count++;
}

function cargarMateria(materia) {
  let body = "";
  const color=["orange","purple","brown","yellow","green","blue"]

  for (let i = 0; i < materia.length; i++) {
    const n=0
    
        
    body += `
    <div class="col-md-4 col-sm-6 content-card">
    <div class="card-big-shadow" style="max-width: 540px;">
  
        <div class="card card-just-text" data-background="color" data-color="${color[cargarColor()]}" data-radius="none">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" class="btn-close" aria-label="Close" onclick="eliminarMateria(${materia[i].id})"></button>
            </div>   
        <div class="content">
            
                <h4 class="title"><a href="#" onclick="listaNotas(${materia[i].id})"> ${materia[i].nombre}</a></h4>
                <h6 class="category">${materia[i].codigo} - ${materia[i].grupo}</h6>
                <p class="description">Docente: ${materia[i].profesor}</p>
            </div>
        </div> 
    </div>
</div>

        
        `;
        
  
}
  document.getElementById("root").innerHTML = body;
  cargarModalMateria()
}


async function saveMateria(){

    let nombre=document.getElementById("nombreMateria").value
    let profesor=document.getElementById("nombreMateriaProfesor").value
    let codigo=document.getElementById("codigo").value;
    let grupo=document.getElementById("selectGrupo");
    let textGrupo=grupo.options[grupo.selectedIndex].text
    let fecha = new Date()
    const materia={
        usuario_id:1,
        nombre,
        profesor,
        codigo,
        grupo: textGrupo,
        fecha_registro:fecha
    }
    const resultSave=await fetch("http://localhost:8088/materia",{
        method :'POST',
        body:JSON.stringify(materia),
        headers:{
            "Content-type":"Application/json"
        }
    })
    .then(response=>response.json())
    .then(data=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(recargar,1500)
    })
    .catch(error=>console.log(error+"no se registro materia"))
   // console.log(materia)



}

function eliminarMateria(id){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
}

function recargar(){
    location.reload()
}





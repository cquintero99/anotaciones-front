async function findByIdMateria(id){
    let token=localStorage.getItem("token")
    const result=await fetch(urlBasic+"/materia/"+id,{
        headers:{
            "Authorization":"Bearer "+token
        }
    })
    return result;
  }
  function resumenMateria(id){
    findByIdMateria(id)
    .then(response=>response.json())
    .then(data=>cargarResumenMateria(data))
    .catch(error=>console.log(error))
  }

  function cargarResumenMateria(materia){
    /*
    
    */
    body=`
    
    
    <div class="row justify-content-start">
    <div class="col-md-12 col-sm-12 p-5">
    <div class="cardR l-bg-green-dark"  >
        <div class="card-statistic-3 p-4">
            
            <div class="card-icon card-icon-large">
            <i class="material-icons">menu_book</i>     <span><h2 class="d-flex align-items-center mb-0"> ${materia.codigo} - ${materia.grupo} </h2> <i class="material-icons">number</i></span>
            </div>
            <div class="hstack gap-3">
                <div class="text-light text-center">      <h2 class="" onclick="listaNotas(${materia.id})" ><a class="text-light" href="#"> ${materia.nombre} </a></h2>
                </div>
                <div class="text-light ms-auto">Docente: </div>
                <div class="vr"></div>
                <div class="text-light">  <h5 class=" card-title " > <a href="#"  class="text-light" >${materia.profesor}</a></h5>
                </div>
                </div>
       
            <div class="progress mt-1 " data-height="8" style="height: 8px;">
                <div class="progress-bar l-bg-orange" role="progressbar" data-width="100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
            </div>
            <div class="mb-4 text-center">
               
            </div>
        </div>
    </div>
</div>
    
   
        
  </div>
  
  
  `

    document.getElementById("resumenMateria").innerHTML=body;
    
  }
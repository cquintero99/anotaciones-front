async function resumenMateria(id){
    let token=localStorage.getItem("token")
    const result=await fetch("http://localhost:8088/materia/"+id,{
        headers:{
            "Authorization":"Bearer "+token
        }
    })
    .then(response=>response.json())
    .then(data=>cargarResumenMateria(data))
    .catch(error=>console.log(error))
  }

  function cargarResumenMateria(materia){
    /*
    
    */
    body=`
    
    
    <div class="row justify-content-start">
    <div class="col-md-6 col-sm-6 p-5">
    <div class="cardR l-bg-green-dark"  style="max-width: 600px;">
        <div class="card-statistic-3 p-4">
            
            <div class="card-icon card-icon-large">
            <i class="material-icons">menu_book</i>Materia</div>
            <div class="mb-4">
                <h5 class="card-title mb-0">${materia.nombre}</h5>
            </div>
            <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                    <h2 class="d-flex align-items-center mb-0">${materia.codigo} - ${materia.grupo}</h2>
                </div>
                <div class="col-4 text-right">
                    <span>   ${materia.profesor}<i class="material-icons">hail</i></span>
                </div>
            </div>
            <div class="progress mt-1 " data-height="8" style="height: 8px;">
                <div class="progress-bar l-bg-orange" role="progressbar" data-width="100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
            </div>
        </div>
    </div>
</div>
    
        <div class="col-md-6 col-sm-6 p-5">
            <div class="cardR  l-bg-blue-dark" style="max-width: 600px;">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-users"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0">Integrantes</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0">
                            YO,... 
                            </h2>
                        </div>
                        <div class="col-4 text-right">
                            <span> INVITAR <i class="material-icons">person_add</i></span>
                        </div>
                    </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar l-bg-green" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                    </div>
                </div>
            </div>
        </div>
        
  </div>
  
  
  `

    document.getElementById("resumenMateria").innerHTML=body;
    
  }
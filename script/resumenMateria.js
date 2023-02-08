async function resumenMateria(id){

    const result=await fetch("http://localhost:8088/materia/"+id)
    .then(response=>response.json())
    .then(data=>cargarResumenMateria(data))
    .catch(error=>console.log(error))
  }

  function cargarResumenMateria(materia){
    body=`<div class="text-center">
    <h3 class="fancy">${materia.nombre}</h3>
            <p>${materia.codigo} - ${materia.grupo}</p>
          </div>  `

    document.getElementById("resumenMateria").innerHTML=body;
    
  }
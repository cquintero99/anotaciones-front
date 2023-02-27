async function cargarCategorias(){
    let token=localStorage.getItem("token")
    const resultCategoria=await fetch(urlBasic+'/categorias',{
        headers:{
            "Authorization":"Bearer "+token
        }
    })
    
    return resultCategoria;
}

function mostrarCategorias(){
    cargarCategorias()
    .then(response=>response.json())
    .then(categoria=>{
     let   body=``

    for (let i = 0; i < categoria.length; i++) {
        body+=
        ` <option value="${categoria[i].id}" >${categoria[i].nombre}</option>
        `
        
    }
    document.getElementById("selectCategorias").innerHTML=body;

    })
    .catch(error=>console.log(error))

    
}
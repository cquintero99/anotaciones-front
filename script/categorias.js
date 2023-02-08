async function cargarCategorias(){
    const resultCategoria=await fetch('http://localhost:8088/categorias')
    .then(response=>response.json())
    .then(data=>mostrarCategorias(data))
    .catch(error=>console.log(error))
}

function mostrarCategorias(categoria){

    body=``

    for (let i = 0; i < categoria.length; i++) {
        body+=
        ` <option value=${categoria[i].id}>${categoria[i].nombre}</option>
        `
        
    }
    document.getElementById("selectCategorias").innerHTML=body;
}
async function participantes(id){
               
    if(id!==undefined){
    
    let token=localStorage.getItem("token")
    const resul=await fetch(urlBasic+"/materia/"+id+"/integrantes",{
        headers:{

            "Authorization":"Bearer "+token,
            "Content-type":"Application/json"
            
        }
    })
    .then(res=>res.json())
    .then(data=>{
        let body=``;
        let idUsuario=JSON.parse(localStorage.getItem("data")).id
        for (let i = 0; i < data.length; i++) {
            let rol="Invitado"
            let accion="-"
            if(data[i].usuario_id===data[i].materia.usuario_id){
                rol="Creador"
            }
            if(idUsuario===data[i].materia.usuario_id && idUsuario!==data[i].usuario_id){
                accion="Eliminar"
            }
            body+=` <tr>
            
            <td>${data[i].usuario.nombre} </td>
            <td>${data[i].usuario.apellido} </td>
            <td>${rol}</td>
            <td><a href="#" class="text-light">${accion}</a></td>
            </tr>
            
            `
            
        }
       
    
        
        document.getElementById("participantesMateria").innerHTML=body;
    })
    .catch(err=>{
        console.log(err)
    })
}
}


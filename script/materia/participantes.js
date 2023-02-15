async function participantes(id){
    let token=localStorage.getItem("token")
    const resul=await fetch("http://localhost:8088/materia/"+id+"/integrantes",{
        headers:{

            "Authorization":"Bearer "+token
        }
    })
    return resul;
}

function verParticipantes(id){
    participantes(id)
    .then(res=>res.json())
    .then(data=>console.log(data))
}
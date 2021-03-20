peticion = fetch("https://reqres.in/api/unknown/2")

peticion.then(res=>{
    console.log(res.text())
})

fetch("https://reqres.in/api/unknown/2")
    .then(res=>res.text())
    .then(res=>console.log(res))

fetch("https://reqres.in/api/unknown/2")
    .then(res=>res.json())
    .then(res=>console.log(res))

fetch("https://reqres.in/api/unknown/2")
    .then(res=>res.blob())
    .then(res=>console.log(res))

fetch("https://reqres.in/api/users",{
    method: "POST",
    body: JSON.stringify({
        "nombre": "pepe",
        "apellido": "perez"
    }),
    headers: {
        "Content-type": "application/json"
    }
})
    .then(res=>res.json())
    .then(res=>console.log(res))
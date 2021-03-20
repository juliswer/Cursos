axios("info.txt")
    .then(res=>console.log(res.data))

axios.post("info.txt")
    .then(res=>console.log(res.data))

axios("https://reqres.in/api/users", {
    method: "post",
    data: {
        "nombre": "pepe",
    }
})
.then(res=>console.log(res.data))
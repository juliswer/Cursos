const getName = async ()=>{
    let peticion = await fetch("async_await.txt");
    let resultado = await peticion.json();
    let HTMLCode = `Hola!, vamos a adivinar...<br> Tu nombre es ${resultado.nombre}
                    <br> y tu edad es ${resultado.edad}`;
    document.querySelector(".resultado").innerHTML = HTMLCode
}

getName()

document.getElementById('nombre').addEventListener("click", getName);

const getName2 = ()=>{
        then(res=>{
            if(res.ok){
                Promise.resolve(res)
            } else {
                Promise.reject(res);
            }
        })
        .then(res => console.log(res))
        .catch(e=>console.log(e))
    }
    
getName2()
const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
}

function obtenerInformacion(){
    new Promise((resolve,reyect)=> {
        setTimeout(()=>{
            resolve(objeto)
        },1000)
    })
}

const mostrarResultado = async () => {
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();

const obtenerInformacion = (text)=> {
    return new Promise ((resolve,reyect)=>{
        setTimeout(()=>{
            resolve(text)
        },3000)
    })
}

const mostrarData = async ()=>{
    data1 = await obtenerInformacion("hola1");
    data2 = await obtenerInformacion("hola2");
    data3 = await obtenerInformacion("hola3");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}
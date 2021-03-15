const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click", ()=> {
    let resultado, mensaje;
    try{
        prevRes = parseInt(document.getElementById("nota").value);
        if (isNaN(prevRes)) {
            throw "Gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(8,5,prevRes);
    } catch (e){
        resultado = "Sos re gracioso"
        mensaje = "Intentaste acceder al sitio"
    }       
    abrirModal(resultado,mensaje);
})

const definirMensaje = (pr) => {
    let resultado;
    switch(pr) {
        case 1: resultado = "1/10";
        break;
        case 2: resultado = "2/10";
        break;
        case 3: resultado = "3/10";
        break;
        case 4: resultado = "4/10";
        break;
        case 5: resultado = "5/10";
        break;
        case 6: resultado = "6/10";
        break;
        case 7: resultado = "7/10";
        break;
        case 8: resultado = "8/10";
        break;
        case 9: resultado = "9/10";
        break;
        case 10: resultado = "10/10";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1, nota2, prevRes) => {
    promedio = (nota1 + nota2 + prevRes) / 3
    if (promedio >= 7){
        return "Aprobado";
    }
    return "Desaprobado"
}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";w
    modal.style.animation = "aparecer 1s forwards";
}

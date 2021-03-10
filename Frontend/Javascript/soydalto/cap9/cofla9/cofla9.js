const nombre = document.getElementById("nombre");
const email = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener('click', (e) => {
    e.preventDefault()
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error[1]
        resultado.classList.add("red")
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green")
    }
});

const validarCampos = () => {
    let error = [];
    if(nombre.value.length < 4){
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 5 caracteres";
        return error;
    } else if (nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede contener mas de 40 caracteres";
        return error;
    } else if (email.value.length < 5 || email.value.length > 40 || email.value.indexOf("@") == -1 || email.value.indexOf("." == -1)) {
        error[0] = true;
        error[1] = "El email es invalido";
        return error;
    } else if (materia.value < 5 || materia.value > 40) {
        error[0] = true;
        error[1] = "La materia no existe";
    }

    error[0] = false;
    return error;
}
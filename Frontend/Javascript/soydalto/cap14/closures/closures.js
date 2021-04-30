"strict mode";

const saludar = () => {
    return function(){
        return nombre;
    }
}

let saludo = saludar("pedro")

addEventListener("load", saludo)

const changeSize = size => {
    document.querySelector(".texto").style.fontSize = `${size}px`
}

document.querySelector(".t12").addEventListener("click", () => changeSize(12)) 
document.querySelector(".t14").addEventListener("click", () => changeSize(14)) 
document.querySelector(".t16 ").addEventListener("click", () => changeSize(16)) 
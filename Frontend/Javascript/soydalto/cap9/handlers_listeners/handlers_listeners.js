const button = document.querySelector(".button");

button.addEventListener("click", saludar);

function saludar(){
    alert("hola");
    button.removeEventListener("click", saludar)
}

button.addEventListener("click", (e) => {
    console.log(e.target);
});
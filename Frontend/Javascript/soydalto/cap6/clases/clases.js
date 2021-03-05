const titulo = document.querySelector(".titulo");

titulo.classList.add("grande");
titulo.classList.remove("grande");
titulo.classList.item(1); //devuelve "grande"
titulo.classList.contains("grande"); //devuelve un valor booleano, diciendo si contiene la clase o no
titulo.classList.replace("grande", "chico");
titulo.classList.toggle("grande");
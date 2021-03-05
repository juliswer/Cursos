const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI");

const textDelItem = document.createTextNode("Este es un elemento");

const fragmento = document.createDocumentFragment();

contenedor.appendChild(fragmento);

item.innerHTML = textDelItem;

item.appendChild(textDelItem);

contenedor.appendChild(item);
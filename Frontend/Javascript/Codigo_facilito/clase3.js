var cadena = "Hola mundo";
var nombre = "Julián";
var cadena2 = "Hola " + nombre;
var resultado = caden.indexOf("Julián");



console.log(cadena);
console.log(cadena.length);
console.log(resultado);

if(nombre.indexOf("Julián")!= -1){
    console.log("Eres el tutor del curso")
}
else{
  console.log("No eres el tutor del curso");
}

console.log(nombre[0]); // mide las posiciones

console.log(nombre.charAt(1)); //mide el lugar de las letras. (1 es la segunda posición)

nombre = nombre.replace("U","A");

console.log(nombre);

console.log(nombre.slice(2,3)); //nos devolvería los caracteres digitados

console.log(nombre.toUpperCase()); //vuelve todo a mayúsula
console.log(nombre.toLowerCase()); //vuelve todo a minúscula
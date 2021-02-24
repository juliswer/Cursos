//Para realizar un arreglo se puede hacer de las siguientes dos formas:
var arreglo = [20, 10, 5];            
var arreglo = new Array(20, 10, 5);

console.log(arreglo[0]);
console.log(arreglo.length); //con esto podemos saber cuántos elementos hay en el arreglo

//Hay dos formas de agregar valores a un arreglo:  
arreglo.push(7); 
arreglo.unshift(7); 
// La diferencia entre estos dos es que, con arreglo.push() agregamos un valor al final, mientras que con arreglo.unshift() lo hacemos al principio.

//También existen dos manera de remover elementos en un arreglo:
arreglo.shift();
arreglo.pop();
//Con arreglo.shift() se elimina el primer valor, mientras que con arreglo.pop(); se elimina el último.

var arreglo = [20, 10, 5];

for(var i=0;i<arreglo.length;i++){    //de esta manera se hace que de un número de los del arreglo. Acorde a la condición, va a crecer hasta 2, y la posición 2 es el 5, es decir que nos devolvería 20, 10, 5.
  console.log(arreglo[i]);
}

//Si bien de la anterior manera se puede iterar un arreglo, la forma más optimizada es la siguiente:
var arreglo = [20, 10, 5, 3];

for(var i = arreglo.length;i >= 0;i--){ //de esta manera nos devolvería lo mismo, solo que de atras hacia adelante. Es decir, 3, 5, 10, 20.
  console.log(arreglo[i]);
}

//Otro tipo de optimización es el siguiente:
var arreglo = [20, 10, 5, 3];
var i = arreglo.length;

for(;i>=0;i--){ //esto es así debido a que, como js no tiene que determinar la longitud de i, se hace más rápido.
  console.log(arreglo[i]);
}
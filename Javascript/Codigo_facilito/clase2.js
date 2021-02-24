var edad = 13;
console.log(edad + 3); //esto me va a dar como resultado mi edad final.

edad++; //el ++ aumenta 1 a la variable, es decir, pasa a ser 14.

var puntos_flotantes= 12.5;

console.log(edad + punto_flotantes);

/*
Operadores aritméticos
División = /
Multiplicación = *
Suma = +
Resta = -
Módulo = % (Da el resto de la divisón)
*/

var resultado_suma = edad * 4;

console.log(resultado_suma);

function es_par(número){
  if(numero % 2 == 0){
    return true;
    }
    return false;
 }

console.log(es_par(2));

/* console.log(Math.pow(2,2), //hace potencia
console.log(Math.ceil(0,1), //redondea hacia arriba
console.log(Math.floor(0,9), //redondea hacia abajo
console.log(Math.sqrt(4), // hace la raíz cuadrada
console.log(Math.random), //da un numero random */
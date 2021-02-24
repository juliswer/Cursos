var arreglo = [2,5,1,10,20];

  arreglo.sort(); //arreglo.sort() hace que el arreglo se ordene acorde al índice

  console.log(arreglo);

  function ordenacion(a,b){     //De esta manera se puede ordenar de mayor a menor, pero de una manera muy extensa.
    if(a > b){
      return 1;
    }
    else if(b > a) {
      return -1;
    }
    else if(a === b){
      return 0;
    }
  }
  //Hay otra manera de ordenarlos, pero de una manera más corta y optimizada.
  function ordenacion(a,b){
    return a -b;
  }

  arreglo.reverse(); //hace que se ordene en un orden inverso todos los valores.

  var arreglo = "a,b,c,2".split(","); //con el .split() logramos que se separen los valores en el valor que pongamos. Es decir que en esta línea de código obtendríamos [A, B, C, 2].

  var arreglo = "a,b,c,2".split("b");

  arreglo = arrelo.join(p);  //Con el comando .join() obtenemos un string separados por el valor puesto entre los paréntesis. Es decir que en esta línea de código obtendríamos el siguiente resultado: apbpcp2
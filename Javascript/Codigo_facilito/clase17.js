var letras = ["H", "o", "l", "a"];

  console.log(letras.join("")); //de esta forma se juntan los valores y nos devuelve uno solo.  Por ejemplo: ahora no devolvería "Hola".

  var palabra = 
  letras.reduce(function(valor_anterior_retornado,valor_actual,index,arreglo){
    return valor_anterior_retornado + valor_actual;
  })  //de esta manera se logra hacer lo mismo que antes

  console.log(palabra);

  var numeros = [20,1,23,1,5];

  var suma = numeros.reduce(function(valor_anterior_retornado,valor_actual,index,arreglo){
    return valor_anterior_retornado + valor_actual;
  })
    console.log(suma);

    var suma = 0;
    for(var i = 0; i<numeros.length;i++){
      suma = numeros[i];
    }

    console.log(suma);
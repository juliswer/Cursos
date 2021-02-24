function nombre_function(){
    //codigo que se va a ejecutar al llamar la función
  }

  function suma(a,b){
    return a+b;
  }

  console.log(suma(2,3));

  var resultado = suma(4,7);
  console.log(resultado);

  var funcion_suma = suma;

  function ejecutar(funcion){
    return funcion()
  }

  var funcion_suma = suma;

  resultado = ejecutar(funcion_suma);

  var resultado = suma();

  //No siempre se debe imprimir todos los valores que le demos a una función. Esto la hace muy flexible. Por ejemplo:
  function suma(a,b)
    console.log(b);
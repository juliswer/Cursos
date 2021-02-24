  var number = 0;

  console.log(typeof number);      //el typeof puede servir para saber si una variable está declarada

  if(typeof hola == "undefined"){
    console.log("esta variable no está declarada");
  }

  /*
    Más allá del typeof, cuyo significado está arriba, existen otras dos keywords.
    Null y undefined.
    Null indica la ausencia de valor de una variable. Se va a usar cuando no se esté seguro si una variable tiene un vaor asignado o no.
    Undefined es una variable que siempre está declarada, aunque no la escribamos. A esta variable solo se la puede leer, más no aplicarle un valor cualquiera. Se va a usar más que nada para saber si una variable está definida o no.
   */

   hola = hola + otra_cosa; // este tipo de dato es igual a undefined, ya que la variable otra_cosa no está definida.
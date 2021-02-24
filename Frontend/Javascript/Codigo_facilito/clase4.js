if(true){
    console.log("La condición fue verdadera");
  }
  else if(false){
    console.log("La condición fue falsa");
  }

  var numero_uno = 23;
  var numero_dos = 30;

  if(numero_uno > numero_dos){
    console.log("Entre al bloque");
  }
  else{
    console.log("No podés entrar");
  }

  if(numero_uno == numero_dos){ //la diferencia de == y === es que el primero convierte el dato a uno que pueda dar igualdad, mientras que el triple igual lo toma tal como se lo damos
    console.log("taweno");      //se recomienda siempre usar el triple igual (===)
  } 

  /* Con los if se usan los operadores lógicos, los cuales son:
    > Mayor que
    < Menor que
    OR selecciona entre una opción y otra
    AND, && Hace que puedas poner dos opciones válidas en una misma sentencia
    == Significa igualdad, pero de ser necesario convierte uno de los valores (ej, "30" a 30.)
    === Significa igualdad pero toma los valores tales como los ingresamos.
    != Significa que es diferente, pero al igual que el == transforma uno de los valores de ser necesario.
    !== Significa que es diferente, se lee, la igual que el anterior como "Diferente de..." y la diferencia es que no transforma ningún valor.
  */
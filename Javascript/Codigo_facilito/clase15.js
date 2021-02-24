// Hay 2 formas de hacer lo mismo:
  //  Con callback:   
  var arreglo = [1,5,6,8];

  var cuadrados = numero.map(function(elemento){
    return elemento * elemento;
  });

  console.log(cuadrados);

  var cuadrados

  //Sin callback:

  var cuadrados = [];

  for(var i = numero.length -1; i>=0; i++){
    var numero = numeros[i];
    cuadrados.push(Math.pow(numero,2));
  }

  console.log(cuadrados);
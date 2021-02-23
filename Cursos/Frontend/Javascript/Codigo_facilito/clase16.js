var numeros = [2,4,6,8];  

  numeros.forEach(function(elemento,index,arreglo){ //El forEach es muy parecido al ciclo for, solo que en lugar de utilizar un ciclo se utiliza un callback.
    console.log(elemento);
      console.log(index);
        console.log(arreglo);
  });

  var numeros = [2,4,6,8];

  numeros.forEach(function(elemento,index,arreglo){
    arreglo[index] = Math.pow(elemento,2); 
  });

  console.log(numeros);
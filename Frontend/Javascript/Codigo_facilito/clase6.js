for(var i = 0;i<10;i++){      //El ciclo for recibe 3 procesos. 1 de inicialización, otro de condición y un último de incremento.
    console.log(i);
  }

  var arreglo = ["Hola","mundo"];

  for(var i = 0;i<arreglo.length;i++){
    if(i>1){
      break;
    }
    console.log(arreglo[i]);
  }

  for(var i = 0;i<10;i++)
  if (i%2 !== 0){
    continue;
    console.log(i);
  }
var contador = 0;

  while(contador < 11){             //La diferencia entre while e if es que while repite su comando hasta que este de falso, mientras que if solo lo hace 1 vez, sin importar su estado.
    contador ++;
    console.log(contador);
  }

  if(contador % 2 == 0){
    continue;
  }
    console.log(contador);

  while(true){                    
    contador = contador + 1;      
    console.log(contador);
    continue;
  if(contador >= 10){
    break;
    }
  }    

  /*Dentro del while existen dos keywords. Break y continue.
  Continue sirve para decirle a la máquina que el while sigue vigente, mientras que el break indica el momento en el cual este ciclo While debe romperse*/
  
  do{
    contador++;
    console.log(contador);
    if(contador >= 10){
      break;
    }
  }while(false);

  /*A su vez existe una variación dentro del ciclo While.
  También existe el ciclo Do While, el cual se diferencia de While con que Do While se ejecuta al menos 1 vez, aunque la condición se cumpla o no, mientras que While requiere de la condición en cumplimiento para ejecutarse*/
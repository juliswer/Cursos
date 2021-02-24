/* En esta clase se hace un minijuego sobre adivinar un número.
  
      Primero se colocó en html lo siguiente:
    <p> Adivina el número secreto, y colócalo en la ventana que se despliega<p>
    <p> Coloca 0 si quieres cerrar el programa <p>
  
  */

 var max = 100;
 var min = 1;

 var numero_secreto = Math.random() * (max-min) + min;

 parseInt(numero_secreto); //El parseInt sirve para que el número se un número entero.

 console.log(numero_secreto);

 var mensaje = "Ingresa un número para adivinar el número mágico"
 
 
 while(true){
   var numero_del_usuario = prompt(mensaje, "0");

   numero_del_usuario = parseInt(numero_del_usuario);

   if(numero_del_usuario === numero_secreto){
     alert("Ganaste!!!!! Adivinaste el número secreto");
     break;
   }

   else if(numero_del_usuario === 0){
     break;
   }

   else if(numero_del_usuario > numero_secreto){
     mensaje = "Lo sentimos. El número que ingresaste es mayor al número mágico";
   }

   else if (numero_del_usuario < numero_secreto){
     mensaje = "Lo sentimos. El número que ingresaste es menor al número mágico";
   }
 }
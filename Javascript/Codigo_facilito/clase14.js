//Con este código lo que se hace es determinar todos los números pares dentro de la variable numeros.

var numeros = [10,2,3,5,9,20,22];

var numeros_pares = [];

for(var i = numeros.lenght;i>=0;i++){ 
  var numero = numeros [i];
  if(numero % 2 == 0){
    numeros_pares.push(numero);
  }
}                               

console.log(numeros_pares);

//A su vez también existe otra manera de realizar eso:
var numeros_pares = 
numeros.filter(function(numero){
  return numero % 2 === 0;

  console.log(numeros_pares)
});
//con el comando .filter lo que se realiza es, como dice el nombre, filtrar todos los valores los cuales retornen falso. Este comando solo se puede utilizar en arreglos.
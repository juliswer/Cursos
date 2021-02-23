/*
  Para esta clase se escribió el siguiente código en html:

    <!DOCTYPE html>
      <html lang="en">
        <head>
         <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
        </head>
        <body>
          <button id="btn">Click</button>      
        </body>
      </html>
  */

 (function(){
    document.getElementById('btn').addEventListener('click', function() {
      console.log("Hizo click en mi");
    });

    setTimeout(function(){
      console.log("hola, mundo");
    }, 1000)
  })();

  function hola_mundo(nombre) {
    function construct(){
      return "Hola " + nombre;
    }
    return construct();
  }

  setTimeout(function(){
    console.log(hola_mundo("Julián"));
  }, 1000)

  // Se denomina closures a funciones las cuales se declaran en otras funciones
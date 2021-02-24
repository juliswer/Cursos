/* 
    Para llevar a cabo esta clase se escribieron distintas líneas de código en HTML:
    <button onclick = "clic()"> Click en mi para abrir un alert</button>
  */

  /*
    En esta clase se vieron eventos, pero que se ejecutan en HTML y se escriben de la siguiente manera:
    <button onmouseOver> = cuando el mouse se posiciona arriba del botón.
    <button onmouseOut> = cuando el mouse se sale del boton.
  */

 function clic(){
    alert(":3");
  }

  // LA FORMA MÁS CORRECTA DE ENLAZAR UN EVENTO ES LA SIGUIENTE:
  /* En HTML se crea el botton y se le aplica un id:
    <button id="mi_btn">Clic en mi para abrir un alert</button>
  */

  document.getElementById("mi_btn").addEventListener("click", clic());  //dentro del addEventListener se tiene que utilizar la siguiente estructura: 1-El evento que va a suceder. 2-La función que se va a ejecutar cuando este evento suceda.
  //Además siempre se ejecuta de adentro hacia afuera.

  function clic(){
    alert(":3");
  }

  // Para hacer otro ejemplos también se hizo lo siguiente en HTML:
  /*
    <div id="mi_div">
      <button id="mi_btn">
        Click en mí para abrir un alert
      </button>
    </div>
  */

  document.getElementById("mi_div").addEventListener("click",another_clic, true);

  document.getElementById("mi_btn").addEventListener("click", clic, false);

  function clic(){
    alert("Esto fue disparado por el botón")
  }

  function another_clic(){
    alert("Esto fue disparado por el div");
  }
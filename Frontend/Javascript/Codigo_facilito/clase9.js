/*
    Para llevar esta clase a cabo se escribieron distintas líneas de código en HTML y CSS:
    HTML: <div> id="mi_div" class="mi_clase"</div>
    CSS: .mi_clase{
      background: red;
      padding: 10px;
    }
  */

 var div = 
 document.getElementById("mi_div");  //esto se utiliza solo si queremos obtener un div.
 document.getElementsByClassName("mi_clase"); //esto se utiliza solo si queremos obtener la clase.
 document.getElementsByTagName("div"); //esto sirve para obtener todos los elementos que tengan la etiqueta colocada entre las comillas.
 document.querySelector(".mi_clase"); // Esto se utiliza para seleccionar elementos de CSS.
 document.querySelectorAll(); //Esto se utiliza para seleccionar TODOS los elementos.

 /*Hay una forma de declarar que busco por clase o por id:
   con un punto (.) significa que busco por clase
   con un numeral (#) significa que busco por id.
 */

 div.classList.add("mi_clase");

 console.log(mi_div);
 console.log(mi_clase);
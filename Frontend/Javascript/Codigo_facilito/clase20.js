function tutor () {
    this.nombre = nombre;
    this.saludar = function() {
      console.log("Hola a todos, soy " + this.nombre);
    }
    if(typeof apellido !== "undefined"){
    this.nombre_completo = nombre + " " + apellido;
    }

  }               
  
  var julian = new tutor("Julián", "Swerdlin");

  julian.saludar();

  console.log(julian.nombre_completo)

  var pepito = new tutor ("Pepito");

  pepito.saludar();
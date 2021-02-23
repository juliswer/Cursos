function tutor () {
    this.nombre = nombre;
    this.saludar = function() {
      console.log("Hola a todos, soy " + this.nombre);
    }
    if(typeof apellido !== "undefined"){
    this.nombre_completo = nombre + " " + apellido;
    }

  }               

  Tutor.prototype.edad = 22;
  
  var julian = new tutor("Julián", "Swerdlin");
  var jose = new tutor("Jose");

  julian.iniciar_tutorial = function(){
    console.log("Bienvenidos a este nuevo tutorial")
  }

  julian.iniciar_tutorial();

  julian.edad = 16;

  console.log(julian.edad);
  console.log(jose.edad); //Esto nos devuelve undefined, aunque luego del prototype de tutor, va a pasar a devolver 22.

  jose.iniciar_tutorial()

  // En resumen la propiedad prototype sirve para darle un valor a todos los elementos. Por ejemplo como vimos con la edad de los tutores 
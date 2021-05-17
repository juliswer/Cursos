var arreglos = [1,2,3,4];

  var curso = {
    titulo: "Curso javascript",
    videos: 19,
    tutor: "Uriel",
    introduccion: function() {
      console.log("Bienvenido al curso: " + this.titulo + "que tiene " + this.videos); //la palabra this nos permite acceder a los demás atributos de un mismo json
    };
  };

  console.log(curso.introduccion());

  //Para imprimir un valor se pone el nombre de la variable acompañado del dato a saber:
  console.log(curso.titulo);
  console.log(curso.videos);
  console.log(curso.tutor);

var curso = {
    titulo: "Curso javascript",
    videos: 22,
    tutor: "Uriel",
    introduccion: function(){
      console.log("Bienvenido al curso " + this.titulo + "que tiene " + this.videos + "videos");
    },
    otra_function: function(){

    }
  };

  //Esta manera se hacía antes de ES5, mientras que con el 6, se hace de otra diferente.

  var curso = {
    titulo: "Curso javascript",
    videos: 22,
    tutor: "Uriel",
    getTutor: function() {
      return this.tutor.toUpperCase();
    },
    setTutor: function(tutor){
      if(tutor === ""){
        return ;
      }
      this.tutor = tutor
    }
  };

  curso.setTutor("Jose");
  console.log(curso.getTutor()); 

  // Con ES6:

  var curso = {
    titulo: "Curso javascript",
    videos: 22,
    tutor_value: "Uriel",
    get tutor(){
      return this.tutor_value.toUpperCase();
    },
    set tutor(){
      if (tutor === "" || (typeof tutor === "undefined")) {
        return;
      }
      this.tutor_value = tutor;
    }
  };

  curso.tutor_value = "Carlos";
  console.log(curso.tutor_value);
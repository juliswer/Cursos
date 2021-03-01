class Celular {
    constructor(color,peso,tamano,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamano = tamano;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true) {
            alert("reiniciando celular")
        } else {
            alert("el celular esta apagado")
        }
    }

    tomarfotos(){
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`)
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamano: <b>${this.tamano}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamano,rdc,ram, rdce){
        super(color,peso,tamano,rdc,ram);
            this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en cama lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`
    }
}

// celular1 = new celular ("rojo","150g","5'","hd", "1 GB")
// celular2 = new celular ("negro","155g","5.4'","full hd", "2 GB")
// celular3 = new celular ("blanco","146g","5.9'","full hd", "2 GB")

// celular1.presionarBotonEncendido()
// celular1.tomarfotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();
celular1 = new CelularAltaGama("rojo","130g","5.2'","4k", "3GB", "Full hd")
celular2 = new CelularAltaGama("negro","142g","6'","4k", "4GB", "hd")

// document.write(`
//     ${celular1.mobileInfo()} <br>
//     ${celular2.mobileInfo()} <br>
//     ${celular3.mobileInfo()} <br>
// `);

document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>
`);

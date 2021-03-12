class Tesla:
    bateria = 0
    panel = 1
    modelo = "s"
    def __init__(self, cargaBateria, modeloTesla):
        self.bateria = cargaBateria
        self.modelo = modeloTesla

    def auto_conducir(self):
        print("Soy modelo {} y tengo la capacidad de manejarme solo".format(self.modelo))
        print("Quedan {} de bateria".format(self.bateria))

teslaY = Tesla(100, "Y")
teslaX = Tesla(200, "X")

teslaX.auto_conducir()
teslaY.auto_conducir()
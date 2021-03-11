nombre = "pepito";
precio = 14.40;
primero_mes = 2;
segundo_mes = 5;

def calcular_importe(numero_suscriptores, precio_suscripcion, mes):
    link = "http://loquesea.com"
    print(link)
    print("Se ha hecho en ", mes)
    print(numero_suscriptores * precio_suscripcion)

def calcular_total():
    print("Se ha hecho: ")
    print(precio*primero_mes)
    print(precio*segundo_mes)

print(nombre)
calcular_total()
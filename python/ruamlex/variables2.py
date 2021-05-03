def calcular_importe(numero_suscriptores, precio_suscripcion, mes):
    link = "http://loquesea.com"
    print(link)
    print("Se ha hecho en ", mes)
    print(numero_suscriptores * precio_suscripcion)

def calcular_total():
    print("Se ha hecho: ")
    print(precio*primero_mes)
    print(precio*segundo_mes)

def recoger_valores():
    nombre = input("Introduzca su nombre: ")
    precio = float(input("Introduzca el precio de la subscripcion: "))
    num_suscriptores_mes_uno = int(input("Introduzca numero subs mensual 1: "))
    num_suscriptores_mes_dos = int(input("Introduzca numero subs mensual 2: "))
    calcular_importe(num_suscriptores_mes_uno, precio, "enero")
    calcular_importe(num_suscriptores_mes_uno, precio, "febrero")

recoger_valores()

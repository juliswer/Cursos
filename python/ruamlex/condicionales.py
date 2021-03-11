def calcular_importe(numero_suscriptores, precio_suscripcion, mes):
    resultado = numero_suscriptores * precio_suscripcion
    print("Se ha hecho en ", mes)
    print(resultado)
    return resultado;

def recoger_valores():
    nombre = input("Introduzca su nombre: ")
    precio = float(input("Introduzca el precio de la subscripcion: "))
    num_suscriptores_mes_uno = int(input("Introduzca numero subs mensual 1: "))
    num_suscriptores_mes_dos = int(input("Introduzca numero subs mensual 2: "))
    resultado1 = calcular_importe(num_suscriptores_mes_uno, precio, "enero")
    resultado2 = calcular_importe(num_suscriptores_mes_dos, precio, "febrero")
    if(resultado2 > resultado1):
        print("Sigue asi que vas bien")
    if resultado1 > resultado2:
        print("Creo que no va a poder ser posible")
    if resultado2 == resultado1:
        print("Esta igual")

recoger_valores()
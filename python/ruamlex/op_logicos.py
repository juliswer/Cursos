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

def registrar_usuario():
    login = input("Introduzca su nombre de usuario: ")
    password = input("Introduzca su contrasena: ")
    repeat_password = input("Repita su contrasena: ")
    edad = int(input("Introduzca su edad: "))

    valido = False
    pwd_equal = password == repeat_password
    comprobacion_edad = edad >= 18

    if(pwd_equal & comprobacion_edad):
        valido = True

    # if(pwd_equal):
    #     if(comprobacion_edad):
    #         valido = True
    
    if (valido):
        print("Usuario registrado")
    else:
        print("Usuario no registrado")

registrar_usuario()
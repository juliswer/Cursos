def jugar_fortnite():
    accion = input("Que deseas realizar?? (d - r - c): ")
    salir = input("Para salir apreta la S: ")
    if(accion == 'c'):
        print("Construyendo una casa")

    if(accion == 'd'):
        print("Disparando al enemigo")

    if(accion == 'r'):
        print("Recargando municion")

    if(salir == 's'):
        print("Saliendo del juego...")
        exit()

def main ():
    while(True):
        jugar_fortnite()

main()
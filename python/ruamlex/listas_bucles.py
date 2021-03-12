def alana():
    canal = ["https://ph.com/alana1", "https://ph.com/alana2", "https://ph.com/alana3"]
    return canal;

def mia():
    canal = ["https://ph.com/mia123", "https://ph.com/mia45"]
    return canal;

def mostrar_canal():
    print("Tenemos estos canales de ph disponibles: ")
    print(">Introduzca 1 para Alana: ")
    print(">Introduzca 2 para Mia: ")
    seleccion = int(input(">"))
    videos_canal = []

    if(seleccion == 1):
        videos_canal = alana()
    
    if(seleccion == 2):
        videos_canal = mia()
    
    for video in videos_canal:
        print(video)

mostrar_canal()
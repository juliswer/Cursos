<?php 
//    include("index9.conexion.php");
//    $solicitud = "CREATE TABLE datos (
//        ID int NOT NULL AUTO_INCREMENT, Nombre varchar (15), Apellido varchar (15), Edad int, //Celular int, PRIMARY KEY(ID))";
//
//    $resultado = mysqli_query($conexion, $solicitud);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index9.1.php" method="POST">
        Nombre: <input type="text" name="nombre" id=""> <br>
        Apellido: <input type="text" name="apellido" id=""> <br>
        Edad: <input type="text" name="edad" id=""> <br>
        Celular: <input type="text" name="celular" id=""> <br>
        <input type="submit" value="enviar" name="Enviar">
    </form>
    <a href="index9.2.php">Ver los registros</a>
</body>
</html>
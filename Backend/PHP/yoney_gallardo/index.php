<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso PHP</title>
</head>
<body>
    <h3>Hola a todos en PHP</h3>
</body>
</html>

<?php 
    // comentario en linea
    /*
    comentario en bloque
    */
    $a = "<h3>Hola a todos</h3>";
    $b = 456;
    $dia = 13;
    $nombre = "Pepe";
    $apellido = "Gonzales";
    echo "<p>$nombre</p>"; 
    echo "<p>$dia</p>";
    echo gettype($dia);
    echo var_dump($dia);
    echo "<p>$a</p>";
    echo "<h3>Esto es un codigo de php</h3>";
    echo "<h3>ESTO ES MI PRIMER CODIGO EN PHP</h3>";
    echo "<p>-45</p>";
    echo "<p>-180004</p>";
    echo "\\";
    echo "<p>personas de la \"tercera\" edad.</p>";
    echo "El precio es 15 \$us";
    echo $nombre . " - " . $apellido;
    echo "<p>".$nombre . " " . $apellido ."</p>";
    echo "<a href=\"https://google.com\">" . $nombre . "</a>" . $apellido;
    $c = FALSE;
    $d = 10;
    $e = 11;
    if ($d < 11) {
        echo "es menor";
    }
    if ($e < 9) {
        echo "no es menor";
    }
    $dia1 = "Lunes";
    $dia2 = "Martes";

    $f = (int)$d;

    var_dump($f);
?>
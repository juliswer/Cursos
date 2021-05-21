<?php 
    session_start();

    echo "Bienvenido " . $_SESSION['usuario'] . "<br>";
    echo "Su pais es: " . $_SESSION['pais'] . "<br>";

    echo "<a href='index5.3.php'>Cerrar Sesion</a>";
?>
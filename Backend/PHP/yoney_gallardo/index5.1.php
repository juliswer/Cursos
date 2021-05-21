<?php 
    $user = "pepe";
    $password = "123";

    if($_POST['usuario'] == $user && $_POST['password'] == $password) {
        session_start();
        $_SESSION['usuario'] = "John Doe";
        $_SESSION['pais'] = "Chile";
        header('location: index5.2.php');
    } else {
        echo "Su nombre de USUARIO o CONTRASEÑA es incorrecta, intentelo de nuevo. <br>";
        echo "<a href='index5.php'>Intentar nuevamente</a>";
    }
?>
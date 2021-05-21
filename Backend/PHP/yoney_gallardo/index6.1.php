<?php 
    $miPais = $_POST['pais'];
    setcookie("estado", " $miPais", time()+3600);
    $_COOKIE['estado'];
    echo $_COOKIE['estado'];
?>
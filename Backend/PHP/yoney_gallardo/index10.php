<?php 
    $letra = "ESTO ES UN TEXTO EN MAYUSCULA";
    function uno(){
        echo "Hola a todos <br>";
    }
    
    function dos(){
        return "Hola a todos <br>";
    }

    function tres($uno, $dos, $tres, $cuatro, $cinco){
        return $uno;
    }

    uno();
    dos();
    tres("Lunes", "Martes", "Miercoles", "Jueves", "Viernes");

    echo strtoupper($letra);
    echo strtolower($letra);
    echo ucfirst($letra);
    echo ucwords($letra);
    echo strtr($letra);
    echo strlen($letra);
    echo strrev($letra);
    echo chr($letra);
    echo ord($letra);
?>
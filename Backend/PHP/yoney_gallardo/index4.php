<?php 
    $dia1 = "Lunes";
    $dia2 = "Martes";
    $dia3 = "Miercoles";
    $dia[] = "Lunes";
    $dia[] = "Martes";
    $dia[] = "Miercoles";
    echo $dia[2];
    $semana = array("Lunes", "Martes", "Miercoles");
    $semana = ["Lunes", "Martes", "Miercoles"];
    echo "<br>" . $semana[2];
    $dia["uno"] = "Lunes";
    $dia["dos"] = "Martes";
    $dia["tres"] = "Miercoles";
    $semana = array("uno" => "Lunes", "dos" => "Martes", "tres" => "Miercoles");
    echo "<br>" . $semana["tres"];
    $semana = [
        [10,20,30,40],
        [100,200,300,400],
        ["Gato", "Perro", "Loro", "Alberto"]
    ];
    echo "<br>" . $semana[2][1];
    $semana = [
        "uno" => [10,20,30,40],
        "dos" => [100, 200, 300, 400],
        "tres" => ["Gato", "Perro", "Loro", "Alberto"]
    ];
    echo "<br>" . $semana["dos"][0];
?>
<?php 
    $a = 100;
    $b = "";
    $c = 1;
    $d = 10;
    $semana = array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes");

    if($a == 100){
        echo "Es igual";
    };

    if(isset($b) && !empty($b)){
        echo "Ok";
    };

    if ($a == 100) {
        echo "Es igual";
        if(is_integer($a)) {
            if($a < 500) {
                echo "Todo correcto";
            } else {
                "Todo incorrecto";
            }
        }
    } else {
        echo "No es igual";
    }

    if($a == 100){
        echo "Es cien";
    }
    elseif($a == 2) {
        echo "Es dos";
    }
    elseif($a == 3){
        echo "Es tres";
    } else {
        echo "No es ninguno de los anteriores";
    }

    switch($a){
        case 1: echo "Es uno"; break;
        case 2: echo "Es dos"; break;
        case 3: echo "Es tres"; break;
        case 4: echo "Es cuatro"; break;
        case 5: echo "Es cinco"; break;
        default: echo "No es ninguno"; break;
    }

    while($d <= 20) {
        echo $d. "<br>";
        $d++;
    }

    do {
        echo $d."<br>";
        $d++;
    } while ($d <= 10);

    for($b = 1; $b<=10; $b++){
        echo $b."<br>";
    }

    echo $semana[0];
    foreach ($semana as $indice => $nueva) {
        echo "<br>" . $indice. " - " . $nueva . "<br>";
    }

    for ($i=1; $i <=50; ++$i){
        if($i>=10 and $i<=20) {
            continue;
        }
        echo $i . "<br>";
    }

    for ($i=1; $i <= 50; ++$i){
        if($i == 20){
            break;
        }
        echo $i . "<br>";
    }
?>
<?php 
    echo 45 + 5;
    echo 45 - 5;
    echo 5 * 5;
    echo 50/5;
    $a = 50;
    $b = 5;
    echo $a/$b;
    echo $a%$b;
    echo $a**$b;

    $c = 5;
    $d = 10;
    $e = $a+$d;
    echo $e;
    $c += 10;
    $d -= 5;
    echo $c;

    if ($a == $b){
        echo "It's true";
    } else {
        echo "It's false";
    }
    if ($a === $b) {
        echo "It's true";
    }
    if($a != $b) {
        echo "It's true";
    } 
    if ($a < $b) {
        echo "It's true";
    } 
    if ($a > $b) {
        echo "It's false";
    } 
    if ($a <= $b) {
        echo "It's true";
    } 
    if ($a >= $b) {
        echo "It's false";
    }
    echo $a <=> $b;
    echo $a == $b ? "Es igual" : "No es igual";
    echo $a ?? $b ?? "No existe";

    echo `dir`;

    while ($a < 10) {
        $a++;
        echo $a. "<br>";
    }

    while ($a < 10) {
        ++$a;
        echo $a. "<br>";
    }
    
    while ($a > 10) {
        $a--;
        echo $a. "<br>";
    }
    
    while ($a > 10) {
        --$a;
        echo $a. "<br>";
    }

    if($a == 50 && $b == 20){
        echo "CORRECT";
    } else {
        echo "INCORRECT";
    }

    if($a == 50 || $b == 20){
        echo "CORRECT";
    } else {
        echo "INCORRECT";
    }

    if($a == 50 XOR $b == 20){
        echo "CORRECT";
    } else {
        echo "INCORRECT";
    }

    if(!$a){
        echo "CORRECT";
    } else {
        echo "INCORRECT";
    }

    $g = "UNO";
    $h = "DOS";
    $i = "TRES";
    echo $g.$h.$i;
?>
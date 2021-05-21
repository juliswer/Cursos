<?php
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $solicitud = fopen("texto.txt", "a") or die("No se pudo abrir para escribir");

    fwrite($solicitud, "ASUNTO: ");
    fwrite($solicitud, "\n");
    fwrite($solicitud, $asunto);
    fwrite($solicitud, "\n");
    fwrite($solicitud, "MENSAJE: ");
    fwrite($solicitud, "\n");
    fwrite($solicitud, $mensaje);

    echo "La operacion fue correcta, si quiere revisar visite el siguiente link: <a href='index7.2.php'>Click</a>";
    fclose($solicitud);
?>
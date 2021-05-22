<?php
    include("index9.conexion.php");

    $solicitud = "SELECT * FROM datos ORDER BY Edad DESC";
    $resultado = mysqli_query($conexion, $solicitud);

    echo "<table border='1'> <tr><td>Nombre y Apellido</td><td>Edad</td><td>Celular</td><td colspan='2'>ACCIONES</td></tr>";

    while($fila = mysqli_fetch_array($resultado)){
        echo "<tr>";
        echo "<td>" . $fila['Nombre'] . " " . $fila['Apellido'] .  "</td>";
        echo "<td>" . $fila['Edad'] . "</td>";
        echo "<td>" . $fila['Celular'] . "</td>";
        echo "<td> <a href='index9.3.php?id=" . $fila['ID'] . " '>Eliminar</a";
        echo "<td> <a href='index9.4.php?id=" . $fila['ID'] . " '>Modificar</a";
        echo "</tr>";
    }

    echo "</table>";
    echo "<a href='index9.php'>Volver al inicio</a>";
?>
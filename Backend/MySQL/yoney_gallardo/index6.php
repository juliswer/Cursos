<?php 
    $conexion = mysqli_connect('localhost', 'alex', '123', 'tienda');
    $solicitud = " 
        DELETE FROM productos WHERE id_producto BETWEEN 130 AND 140;
    ";
    $resultado = mysqli_query($conexion, $solicitud);

    while($uno = mysqli_fetch_array($resultado)){
        echo $uno['nombre'] . $uno['apellido'];
    }
?>
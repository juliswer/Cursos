<?php 
    $conexion = mysqli_connect('localhost', 'alex', '123', 'tienda');
    $solicitud = " 
        UPDATE clientes SET telefono='555555' WHERE id_cliente=1;
        UPDATE clientes SET telefono='444444' WHERE id_cliente BETWEEN 5 AND 10;
    ";
    $resultado = mysqli_query($conexion, $solicitud);

    while($uno = mysqli_fetch_array($resultado)){
        echo $uno['nombre'] . $uno['apellido'];
    }
?>
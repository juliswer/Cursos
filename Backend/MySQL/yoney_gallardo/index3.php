<?php 
    $conexion = mysqli_connect('localhost', 'alex', '123', 'tienda');
    $solicitud = " 
        ALTER TABLE clientes RENAME usuarios;
        ALTER TABLE usuarios CHANGE telefono celular INT(11);
        ALTER TABLE usuarios ADD COLUMN (direccion VARCHAR(20));
        ALTER TABLE usuarios DROP COLUMN edad;
    ";
    $resultado = mysqli_query($conexion, $solicitud);

    while($uno = mysqli_fetch_array($resultado)){
        echo $uno['nombre'] . $uno['apellido'];
    };
?>

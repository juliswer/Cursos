<?php 
    $conexion = mysqli_connect('localhost', 'alex', '123', 'tienda');
    $solicitud = " 
        INSERT INTO clientes (nombre, apellido, edad, telefono) VALUES ('Alex', 'Gonzales', '29', '123456789')
        INSERT INTO clientes (nombre, apellido, edad, telefono) VALUES ('Alex', 'Gonzales', '29', '123456789')
        INSERT INTO clientes (nombre, apellido, edad, telefono) VALUES ('Alex', 'Gonzales', '29', '123456789')
        SELECT * FROM clientes
        INSERT OUTFILE 'C:/Users/julia/Desktop/programacion/estudio/cursos/Backend/MySQL/      yoney_gallardo/mis-clientes.csv'
        FIELDS TERMINATED BY ';'
        LINES TERMINATED BY '\n\r'
    ";
    $resultado = mysqli_query($conexion, $solicitud);

    while($uno = mysqli_fetch_array($resultado)){
        echo $uno['nombre'] . $uno['apellido'];
    }
?>
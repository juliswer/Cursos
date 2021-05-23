<?php 
    $conexion = mysqli_connect('localhost', 'alex', '123', 'tienda');
    $solicitud = " 
        CREATE USER yoney @localhost IDENTIFIED BY '123456'
        CREATE DATABASE proyecto
        CREATE TABLE productos (
            id_producto INT NOT NULL AUTO_INCREMENT,
            PRIMARY KEY (id_producto),
            nombre VARCHAR(150),
            precio INT
        );
        
        CREATE TABLE clientes (
            id_cliente INT NOT NULL AUTO_INCREMENT,
            PRIMARY KEY (id_cliente),
            nombre VARCHAR(100),
            apellido VARCHAR(100),
            edad INT,
            telefono INT
        );
        
        CREATE TABLE pedidos (
            id_pedido INT NOT NULL AUTO_INCREMENT,
            PRIMARY KEY (id_pedido),
            fecha DATE,
            cantidad INT,
            id_cliente INT,
            id_producto INT,
            FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
            FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
        )
    ";
    $resultado = mysqli_query($conexion, $solicitud);

    while($uno = mysqli_fetch_array($resultado)){
        echo $uno['nombre'] . $uno['apellido'];
    }
?>
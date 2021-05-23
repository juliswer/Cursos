<?php 
    $conexion = mysqli_connect('localhost', 'alex', '123', 'tienda');
    $solicitud = " 
        SELECT * FROM clientes;
        SELECT nombre FROM clientes;
        SELECT nombre, apellido FROM clientes;
        SELECT nombre, apellido FROM clientes WHERE id_cliente=10;
        SELECT * FROM clientes WHERE id_cliente BETWEEN 5 AND 10;
        SELECT * FROM clientes WHERE nombre LIKE 'v%';
        SELECT * FROM clientes WHERE id_cliente IN (1,3,5,7);
        SELECT * FROM clientes WHERE id_cliente<20 ORDER BY nombre ASC;
        SELECT * FROM clientes WHERE id_cliente<20 ORDER BY nombre DESC;
        SELECT COUNT(*) AS nombre FROM clientes WHERE nombre='pepe';
        SELECT SUM(edad) AS edad FROM clientes WHERE nombre='pepe';
        SELECT MAX(edad) AS edad FROM clientes;
        SELECT MIN(edad) AS edad FROM clientes;
        SELECT AVG(edad) AS edad FROM clientes;
        INSERT INTO pedidos (fecha, cantidad, id_cliente, id_producto) VALUES ('2021-05-23','2','1','2');
        INSERT INTO pedidos (fecha, cantidad, id_cliente, id_producto) VALUES ('2021-05-18','5','2','1');
        INSERT INTO pedidos (fecha, cantidad, id_cliente, id_producto) VALUES ('2021-05-19','1','1','3');
        INSERT INTO pedidos (fecha, cantidad, id_cliente, id_producto) VALUES ('2021-05-20','8','3','1');
        INSERT INTO pedidos (fecha, cantidad, id_cliente, id_producto) VALUES ('2021-05-21','9','2','2');
        INSERT INTO pedidos (fecha, cantidad, id_cliente, id_producto) VALUES ('2021-05-22','4','3','3');
        SELECT nombre, id_producto FROM clientes INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente WHERE cantidad > 4;
        SELECT * FROM clientes LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_pedido;
        SELECT * FROM clientes RIGHT JOIN pedidos ON clientes.id_cliente = pedidos.id_pedido;
    ";
    $resultado = mysqli_query($conexion, $solicitud);

    while($uno = mysqli_fetch_array($resultado)){
        echo $uno['nombre'] . $uno['apellido'];
    };
?>

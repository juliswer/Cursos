<?php 
    include('index9.conexion.php');

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $edad = $_POST['edad'];
    $celular = $_POST['celular'];
    $id = $_POST['id'];

    $solicitud = "UPDATE datos SET Nombre = '$nombre', Apellido = '$apellido', Edad = '$edad', Celular = '$celular' WHERE id=$id ";

    $resultado = mysqli_query($conexion, $solicitud);

    header("location: index9.2.php");
?>
<?php
require 'conexion.php';

$nombre=trim($_POST['nombre']);
$apellido=trim($_POST['apellido']);
$dni=trim($_POST['dni']);
$telefono=trim($_POST['telefono']);

if($nombre=='' or $apellido=='' or $dni=='' or $telefono==''){
    echo "error todos los campos tienen que estar completos";
}else{

    $consulta = "INSERT INTO cliente(cliente_nombre,cliente_apellido,cliente_dni,cliente_telefono) VALUES ('$nombre','$apellido','$dni','$telefono')";
    $agregarCliente = mysqli_query($conexion,$consulta);
    
    if ($agregarCliente){
        echo "Cliente agregado con exito";
    }else{
        die("Hubo un error al agregar el cliente");
    }
    
    mysqli_close($conexion);
}

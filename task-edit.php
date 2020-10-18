<?php

require_once "conexion.php";
        $conexion=conexion();


        $maestroid= $_POST['maestroid'];
        $dpi=$_POST['dpi'];
        $nombre=$_POST['nombre'];
        $apellido=$_POST['apellido'];
        $telefono=$_POST['telefono'];
        $correo=$_POST['correo'];
        $fechanac=$_POST['fechanac'];

        $query="UPDATE maestros set maestroid='$maestroid', dpi='$dpi', nombre='$nombre', apellido='$apellido', telefono='$telefono', correo='$correo', fechanac='$fechanac' WHERE maestroid='$maestroid'";

        $result=mysqli_query($conexion, $query);

        if(!$result){
            die('conexion fallida');
        }

        echo 'TAREA ACTUALIZADA';
?>
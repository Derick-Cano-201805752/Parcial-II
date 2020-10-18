<?php
require_once "conexion.php";
        $conexion=conexion();

        //el campo MAESTROID viene de la variable POSDATA del documento APP.JS
        if(isset($_POST['maestroid'])){
            //variables que almacenen los valores que vienen del POST mencionado antes
            //estas varibles se crearon desde cero y son exclusivas del documento TASK-ADD
            $maestroid=$_POST['maestroid'];
            $dpi=$_POST['dpi'];
            $nombre=$_POST['nombre'];
            $apellido=$_POST['apellido'];
            $telefono=$_POST['telefono'];
            $correo=$_POST['correo'];
            $fechanac=$_POST['fechanac'];
            //MAESTROS es el nombre de la tabla, MAESTROID Y DPI son los campos
            //$MAESTROID y $DPI son los valores de las variables
            $sql = "INSERT INTO maestros (maestroid, dpi, nombre, apellido, telefono, correo, fechanac) VALUES ('$maestroid', '$dpi', '$nombre', '$apellido', '$telefono', '$correo', '$fechanac')";
            $result=mysqli_query($conexion, $sql);
            if(!$result){
                die('fallo la conexion');
            }
            echo 'dato agregado';
        }
?>
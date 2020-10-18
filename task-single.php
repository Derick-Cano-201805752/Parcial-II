<?php

        require_once "conexion.php";
        $conexion=conexion();

        $id=$_POST['id'];
        $query="SELECT * FROM maestros WHERE maestroid=$id";
        $result=mysqli_query($conexion, $query);

        if(!$result){
            die('conexion fallida');
        }

        
        $json=array();
        while($row=mysqli_fetch_array($result)){
            $json[]= array(
                //los valores de las varibles ROW provienen de la base de datos
                'maestroid' => $row['maestroid'],
                'dpi' => $row['dpi'],
                'nombre' => $row['nombre'],
                'apellido' => $row['apellido'],
                'telefono' => $row['telefono'],
                'correo' => $row['correo'],
                'fechanac' => $row['fechanac']
            );
        }
        //resgresa los datos en forma de arreglo
        $jasonstring=json_encode($json[0]);
        echo $jasonstring;

?>
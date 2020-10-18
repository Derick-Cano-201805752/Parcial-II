<?php
        require_once "conexion.php";
        $conexion=conexion();

        //conexion con la base de datos y la tabla
        $query='SELECT * FROM maestros';
        $result=mysqli_query($conexion, $query);

        if(!$result){
            die('conexion fallida'. mysqli_error($conexion));
        }

        $json=array();
        while($row=mysqli_fetch_array($result)){
            $json[]=array(
				//MAESTROID y DPI son los valores del Json
				//$row['maestroid'] y $row['dpi'] son los nombres de los campos de la tabla
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
        $jsonstring=json_encode($json);
        echo $jsonstring;
?>
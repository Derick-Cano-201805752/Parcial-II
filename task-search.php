<?php 

require_once "conexion.php";
	$conexion=conexion();

	//el ID SEARCH que estamos recibiendo del Script lo almacenamos en una variable llamada $search
	$search =$_POST['search'];

	//validamos la variable que recibimos del Script
	if(!empty($search)){
		//MAESTROS es el nombre de la TABLA donde haremos la busqueda, MAESTROID el nombre del campo
		// $search validamos la busqueda y el % todos los datos relacionados
		//$query es una consulta de datos
		$query= "SELECT * FROM maestros WHERE maestroid LIKE '$search%' ";
		//verificamos conexion con la variable antes echa en CONEXION.PHP
		$result=mysqli_query($conexion, $query);

		if(!$result){
			//verifica si hay coincidencia de datos o no
				die('Error de Conexion'. mysqli_error($conexion));
		}

		$json=array();
		while ($row=mysqli_fetch_array($result)) {
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
	}
 ?>
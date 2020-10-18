//funcion para verificar el funcionamiento del JQUERY
$(document).ready(function () {
	//variable para editar datos EDIT
	let edit = false;
	console.log('JQUERY esta funcionando');
	//mostrara el cuadro de resulados de busqueda ID=TASK-RESULT
	$('#task-result').hide();
	// funcion para actualizar automaticamente la pagina
	fetchtask();
	// SEARCH es el nombre de la ID buscar en el formulario de html, keyup=se refiere cuando hagamos clik en buscar
	$('#search').keyup(function (e) {
		// revisar si el SEARCH esta vacio
		if ($('#search').val()) {
			//declaramos el ID search como una variable
			let search = $('#search').val();
			$.ajax({
				//documento que utilizaremos para traer los datos del servidor
				url: 'task-search.php',
				type: 'POST',
				data: { search },
				success: function (response) {
					//TASKS es la variable que jala todo el registro de una fila
					let tasks = JSON.parse(response);
					//la variable TEMPLATE servira para llenar una tabla con la busqueda de la variable TASKS
					let template = '';
					tasks.forEach(task => {
						template += `
					  <tr taskID="${task.maestroid}"> 
						<td>${task.maestroid}</td>
						<td> <a href="#" class="task-item">	${task.dpi}	</a> </td>
						<td>${task.nombre}</td>
						<td>${task.apellido}</td>
						<td>${task.telefono}</td>
						<td>${task.correo}</td>
						<td>${task.fechanac}</td>
						<td> 
								<button class="task-delete btn btn-danger">	
									Eliminar
								</button>
						</td>
					  </tr>`
					});
					$('#task').html(template);
				}
			});
		}
	});

	$('#task-form').submit(function (e) {
		//datos que mandaremos por medio del servidor POSTDATA
		const postData = {
			//#maestroid y #dpi son los ID de los controles del formulario en el index
			maestroid: $('#maestroid').val(),
			dpi: $('#dpi').val(),
			nombre: $('#nombre').val(),
			apellido: $('#apellido').val(),
			telefono: $('#telefono').val(),
			correo: $('#correo').val(),
			fechanac: $('#fechanac').val()
		};

		let url = edit === false ? 'task-add.php' : 'task-edit.php';

		$.post(url, postData, function (response) {
			//actualizar 
			fetchtask();
			//resetea los campos del formulario
			$('#task-form').trigger('reset');
		});
		e.preventDefault();
	});

	function fetchtask() {
		$.ajax({
			//enlace con el documento de php que lo hara funcionar
			url: 'task-list.php',
			type: 'GET',
			success: function (response) {
				let tasks = JSON.parse(response);
				let template = '';
				tasks.forEach(task => {
					//las variables utilizadas TASK.NAME Y TASk.DESCRIPTION Son las que 
					//traemos del JSON del documento TASK-LIST
					template += `<tr taskID="${task.maestroid}"> 
						<td>${task.maestroid}</td>
						<td>
						<a href="#" class="task-item">	${task.dpi}	</a>
						</td>
						<td>${task.nombre}</td>
						<td>${task.apellido}</td>
						<td>${task.telefono}</td>
						<td>${task.correo}</td>
						<td>${task.fechanac}</td>
						<td>
						<button class="task-delete btn btn-danger">
						Eliminar
						</button>
						</td>
						 </tr>`
				});
				//esta variable es el ID de la tabla ubicada en HTML
				$('#task').html(template);
			}
		});
	}

	//TASKID, esta ubicada en los TD, y la utilizaremos como llave principal para eliminar registros

	//TASK-DELETE es la propiedad que utilizaremos para manipular el funcionamiento del boton eliminar
	// antes colocado en la variable TEMPLATE, todo esto al hacer click en eliminar
	$(document).on('click', '.task-delete', function () {
		if (confirm('Seguro que deseas eliminar este registro')) {
			//variable ELEMENT detecta el valor clickeado (registro)
			//PARELEMENT sirve para econtrar todo el registro de la tabla (fila)
			let element = $(this)[0].parentElement.parentElement;
			let id = $(element).attr('taskID');
			$.post('task-delete.php', { id }, function (response) {
				fetchtask();
			});
		}
	});

	// cada vez que hagamos click en la propiedad .TASK-ITEM detectaremos la funcion que devolvera los datos al servidor
	$(document).on('click', '.task-item', function () {
		// PARLEMENTE devuelve los valores en primera instancia de un registro y segundo de la llave primaria
		// todo esto se almacena en la variable ID
		let element = $(this)[0].parentElement.parentElement;
		let id = $(element).attr('taskID');
		$.post('task-single.php', { id }, function (response) {
			const task = JSON.parse(response);
			//los valores #MAESTROID Y #DPI son los nombres de los ID´S de los botones del formulario codigo de puesto y nombre
			//los valores TASK.MAESTROID Y TASK.DPI, son: task es el nombre de la variable que conecta con el JSON
			// Y .MAESTROID Y .DPI son las variables que prOviene del documento TASK-SINGLE.
			$('#maestroid').val(task.maestroid);
			$('#dpi').val(task.dpi);
			$('#nombre').val(task.nombre);
			$('#apellido').val(task.apellido);
			$('#telefono').val(task.telefono);
			$('#correo').val(task.correo);
			$('#fechanac').val(task.fechanac);
			edit = true;
		});
	});

});
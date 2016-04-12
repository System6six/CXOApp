<?php #---------------------------------------------------USUARIO------------------------------------------------------ ?>

<meta charset="utf-8"/>

<?php
	include("conexiondb.php"); 
?>

<form action="" method="post"> 
inserte usuario...
	<br/><br/>
	ID: <input name="id"> <br/>
	Nombre: <input name="nombre"> <br/>
	Email: <input name="email"> <br/>
	Direccion: <input name="direccion"> <br/>
	Telefono: <input name="telefono"> <br/>
	<input type="submit" name="u" />
	<br/><br/>

</form>

<?php
	if (isset($_POST['u'])) { //cuando se a presionado el boton enviar 
		$id=$_POST['id'];
		$nomu=$_POST['nombre'];
		$em=$_POST['email'];
		$direc=$_POST['direccion'];
		$tel=$_POST['telefono'];

		mysql_query("insert into usuario (id,nombre,email,direccion,telefono)values('$id','$nomu','$em','$direc','$tel')")or die(mysql_error());
		echo "<h2>Dato de usuario Guardado</h2>";
	}
?>

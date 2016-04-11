<meta charset="utf-8"/>

<?php
	include("conexiondb.php"); 
?>

<?php #---------------------------------------------------INTEGRA------------------------------------------------------ ?>

<?php

	$con=mysql_query("select * from grupo");
	$reg=mysql_fetch_array($con);
	$con1=mysql_query("select * from usuario");
	$reg1=mysql_fetch_array($con1);

?>

<form method="post" name="formi" action="">
	
	Relacione Usuario con Grupo
	</br></br>
	
	<select name="grupo" >
		<option>Selec Grupo</option>
		<?php 
			do{
		 		$nomg=$reg['nombre'];
		 ?>

		 <option value="<?php echo $nomg ?>">
		 	<?php echo $nomg; ?>
		 	
		 </option>
		 <?php 
		 	}while($reg=mysql_fetch_array($con));
		  ?>
	</select>

	<select name="usuario" >
		<option>Selec Usuario</option>
		<?php 
			do{
				$id=$reg1['id'];
		 		$nomu=$reg1['nombre'];
		 ?>

		 <option value="<?php echo $id ?>">
		 	<?php echo $nomu; ?>
		 </option>
		 <?php 
		 	}while($reg1=mysql_fetch_array($con1));
		  ?>
	</select>

	Cant msn enviados: <input name="msn_g"> 

	<input type="submit" name="envia" />

</form>

<?php 
	if (isset($_POST['envia'])) { 
		$g=$_POST['grupo'];
		$u=$_POST['usuario'];
		$m=$_POST['msn_g'];

		mysql_query("insert into integra (usuario,grupo,msn_g)values('$u','$g','$m')")or die(mysql_error());
		echo "<h2>Dato de usuario Guardado</h2>";
	}	
 ?>

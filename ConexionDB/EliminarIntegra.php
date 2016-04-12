<?php #---------------------------------------------- ELIMINAR RELACIONES DE GRUPO ----------------------------------------------------- ?>

<meta charset="utf-8"/>


<?php
	include("conexiondb.php");
?>
 
<?php

	$con=mysql_query("select * from grupo");
	$reg=mysql_fetch_array($con);
	$con1=mysql_query("select * from usuario");
	$reg1=mysql_fetch_array($con1);

?>

<form method="post" name="formi" action="">
	
	Eliminar Relaciones : Usuario -Grupo
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

	<input type="submit" name="env" />

</form>

<?php 
	if (isset($_POST['env'])) { 
		$g=$_POST['grupo'];
		$u=$_POST['usuario'];
		

		mysql_query("delete from integra where usuario='$u' and grupo='$g' ")or die(mysql_error());
		echo "<h2>Registro Eliminado</h2>";
	}	
 ?>

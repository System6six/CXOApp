<meta charset="utf-8"/>

<?php
	include("conexiondb.php"); 
?>


 <?php #---------------------------------------------------ENVIA----------------------------------------------------- ?>

<?php

	$con3=mysql_query("select * from usuario");
	$reg3=mysql_fetch_array($con3);
	$con2=mysql_query("select * from usuario");
	$reg2=mysql_fetch_array($con2);

?>

<form method="post" name="formi" action="">
	
	Registro envio de msn:
	</br></br>
	<select name="remitente" >
		<option>Remitente</option>
		<?php 
			do{
				$id=$reg3['id'];
		 		$nomu=$reg3['nombre'];
		 ?>

		 <option value="<?php echo $id ?>">
		 	<?php echo $nomu; ?>
		 </option>
		 <?php 
		 	}while($reg3=mysql_fetch_array($con3));
		  ?>
	</select>

	<select name="destinatario" >
		<option>destinatario</option>
		<?php 
			do{
				$id2=$reg2['id'];
		 		$nomu2=$reg2['nombre'];
		 ?>

		 <option value="<?php echo $id2 ?>">
		 	<?php echo $nomu2; ?>
		 </option>
		 <?php 
		 	}while($reg2=mysql_fetch_array($con2));
		  ?>
	</select>

	Cant msn enviados: <input name="msn_u"> 

	<input type="submit" name="envia2" />

</form>

<?php 
	if (isset($_POST['envia2'])) { 
		$r=$_POST['remitente'];
		$d=$_POST['destinatario'];
		$mu=$_POST['msn_u'];

		mysql_query("insert into envia (id,remitente,destinatario,msn_u)values('','$r','$d','$mu')")or die(mysql_error());
		echo "<h2>Dato de usuario Guardado</h2>";
	}	
 ?>
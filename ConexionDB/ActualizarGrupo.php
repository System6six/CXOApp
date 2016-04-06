<meta charset="utf-8"/>

<?php
	include("conexiondb.php");
	$con=mysql_query("select * from grupo");
	$reg=mysql_fetch_array($con);
?>

<from action="" method="post">
	<select name="grupo">
		
		<?php
			do{
				$nom=$reg['nombre'];
				$cont=$reg['cont'];
		?>
		
		<option value="<?php echo $cont; ?>">
			<?php echo $nom ?>
		</option>

		<?php
			}while($reg=mysql_fetch_array($con));
		?>

	</select>
	
	<input type="submit" name="act" value="Actualizar" />

</from>

	<?php  
		if (isset($_POST["act"])) {
			$g=$_POST['grupo'];
			$con1=mysql_query("select * from grupo where cont='$cont'")or die(mysql_error());
			$reg1=mysql_fetch_array($con1);

			$nomb=$reg1['nombre'];
			$contr=$reg1['cont'];

	?>

		<form method="post">
			Nombre:<imput name="n" value="<?php echo $nomb; ?>"/> <br/>
			Contraseña:<imput name="c" value="<?php echo $contr; ?>"/> <br/>

			<imput type="hidden" name="cont" value="<?php echo $g; ?>"/>
			<imput type="submit" name="actufinal"/>
		</form>

	<?php

		}
	?>
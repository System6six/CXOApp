<meta charset="utf-8"/>


<?php
	include("conexiondb.php");
?>

<?php #---------------------------------------------------ELIMINAR GRUPO----------------------------------------------------- ?>
 
<?php
	
	$con=mysql_query("select * from grupo");
	$reg=mysql_fetch_array($con);

?>
<script>
	function eliminar(){
	if (confirm("Desea Eliminar")) {
		miform.submit();
	}
}
</script>

<form method="post" name="miform">
	Seleccione Grupo a Eliminar:
	</br></br>
	<select onchange="eliminar()" name="grupo">
		<option>Selec Grupo</option>
		<?php 
			do{
				$cont=$reg['cont'];
		 		$nom=$reg['nombre'];
		 ?>

		 <option value="<?php echo $cont ?>">
		 	<?php echo $nom; ?>
		 </option>
		 <?php 
		 	}while($reg=mysql_fetch_array($con));
		  ?>
	</select>
</form>

<?php 
	if (isset($_POST['grupo'])) {
		$g=$_POST['grupo'];
		mysql_query("delete from grupo where cont='$g' ")or die(mysql_error());
		echo "<script>alert('Dato Eliminado'); location='eliminar.php';</script>";
	}	
 ?>



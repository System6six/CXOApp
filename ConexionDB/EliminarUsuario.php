<?php #---------------------------------------------------ELIMINAR USUARIO----------------------------------------------------- ?>

<meta charset="utf-8"/>


<?php
	include("conexiondb.php");
?>

<?php
	
	$con1=mysql_query("select * from usuario");
	$reg1=mysql_fetch_array($con1);

?>
<script>
	function eliminar1(){
	if (confirm("Desea Eliminar Usuario")) {
		miform1.submit();
	}
}
</script>

<form method="post" name="miform1">
	Seleccione Usuario a Eliminar:
	</br></br>
	<select onchange="eliminar1()" name="usuario">
		<option>Selec Usuario</option>
		<?php 
			do{
				$id=$reg1['id'];
		 		$nom1=$reg1['nombre'];
		 ?>

		 <option value="<?php echo $id ?>">
		 	<?php echo $nom1; ?>
		 </option>
		 <?php 
		 	}while($reg1=mysql_fetch_array($con1));
		  ?>
	</select>
</form>

<?php 
	if (isset($_POST['usuario'])) {
		$g=$_POST['usuario'];
		mysql_query("delete from usuario where id='$g' ")or die(mysql_error());
		echo "<script>alert('Dato Eliminado'); location='eliminar.php';</script>";
	}	
 ?>

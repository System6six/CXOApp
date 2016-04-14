<?php #---------------------------------------------------INTEGRA----------------------------------------------------- ?>

<meta charset="utf-8"/>

<?php

	include("conexiondb.php"); 
?>


<br></br>
<br></br>
USUARIOS VINCULADOS A UN GRUPO:
<br></br>


<?php

	$consulta3=mysql_query("select * from integra")or die(mysql_error());
	$registro3=mysql_fetch_array($consulta3);

	echo "<table border>";
	$cont=0;

	do {
		
		$u=$registro3['usuario'];
		$g=$registro3['grupo'];
		$m=$registro3['msn_g'];
		
		if ($cont==0) {
			//echo "<tr> <td>id</td> <td>Nombre</td> <td>E-Mail</td> <td>direccin</td> <td>telefono</td> </tr>"; 
		}
		$cont=1;
		echo "<tr>  <td>$u<td/> <td>$g<td/>  <td>$m<td/> <tr/>";
	} while ($registro3=mysql_fetch_array($consulta3));

	echo "<table/>";

?>

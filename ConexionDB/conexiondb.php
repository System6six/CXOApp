
<?php
	$servidor="localhost";
	$usuario="root";
	$clave="";
	$base="conexion_cxoapp_db";

	mysql_connect($servidor,$usuario,$clave);
	mysql_select_db($base);
?>
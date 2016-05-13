<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <title>CXOApp Conectando Personas</title>
  <link rel="shortcut icon" href="img/logo1.png">
  <link rel="stylesheet" type="text/css" href="css/960.css" />
  <link rel="stylesheet" type="text/css" href="css/reset.css" />
  <link rel="stylesheet" type="text/css" href="css/text.css" />
  <link rel="stylesheet" type="text/css" href="css/blue.css" />
  <link type="text/css" href="css/smoothness/ui.css" rel="stylesheet" />

  <script type="text/javascript" src="../../ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" async></script>
  <script type="text/javascript" src="js/blend/jquery.blend.js" async></script>
  <script type="text/javascript" src="js/ui.core.js" async></script>
  <script type="text/javascript" src="js/ui.sortable.js" async></script>    
  <script type="text/javascript" src="js/ui.dialog.js" async></script>
  <script type="text/javascript" src="js/ui.datepicker.js" async></script>
  <script type="text/javascript" src="js/effects.js" async></script>
  <script type="text/javascript" src="js/flot/jquery.flot.pack.js" async></script>
  <script id="source" language="javascript" type="text/javascript" src="js/graphs.js" async></script>
  <script type="text/javascript" src="js/Concurrent.Thread.js" async></script>
  <script type="text/javascript" src="js/administrar.js" async></script>
  <script src="https://apis.google.com/js/client.js" async></script>
  <script src="https://apis.google.com/js/platform.js" async defer></script>

  <script type="text/javascript">
      var ventana;
      function abrir() {

        ventana = window.open("https://accounts.google.com/AccountChooser?hl=es-419","_blank","width=600, height=600");
      }
  </script>


</head>

<body>
<!-- WRAPPER START -->
<div class="container_16" id="wrapper">	  
<!-- HIDDEN COLOR CHANGER -->      
      <div style="position:relative;">
      	<div id="colorchanger">
            <a href="admin.php"><span class="bluetheme">Blue Theme</span></a>
        </div>
      </div>
  	<!--LOGO-->
	<div class="grid_8" id="logo"> <a href="admin.php" class="logo-imagen"></a>CXOApp - Panel de Control</div>
    <div class="grid_8">
<!-- USER TOOLS START -->
      <div id="user_tools"><span><a href="admin.php" class="mail"></a> Bienvenido <a href="admin.php">Admin</a>  |  <a href="index.html">Salir</a></span></div>
    </div>
<!-- USER TOOLS END -->    
<div class="grid_16" id="header">
<!-- MENU START -->
<div id="menu">
	<ul class="group" id="menu_group_main">
		<li class="item first" id="one"><a href="admin.php" class="main current"><span class="outer"><span class="inner dashboard">Sesiones</span></span></a></li>
        <li class="item middle" id="two"><a href="forms.html" class="main"><span class="outer"><span class="inner content">Content</span></span></a></li>
        <li class="item middle" id="three"><a href="#"><span class="outer"><span class="inner reports png">Reports</span></span></a></li>
        <li class="item middle" id="four"><a href="#" class="main"><span class="outer"><span class="inner users">Users</span></span></a></li>
		<li class="item middle" id="five"><a href="#" class="main"><span class="outer"><span class="inner media_library">Media Library</span></span></a></li>        
		<li class="item middle" id="six"><a href="#" class="main"><span class="outer"><span class="inner event_manager">Event Manager</span></span></a></li>        
		<li class="item middle" id="seven"><a href="#" class="main"><span class="outer"><span class="inner newsletter">Newsletter</span></span></a></li>        
		<li class="item last" id="eight"><a href="#" class="main"><span class="outer"><span class="inner settings">Settings</span></span></a></li>        
    </ul>
</div>
<!-- MENU END -->
</div>

<!-- CONTENT START -->
    <div class="grid_16" id="content">
    <!--  TITLE START  --> 
    <div class="grid_9">
    <h1 class="dashboard">Manejo de Sesiones</h1>
    </div>
    <!--RIGHT TEXT/CALENDAR-->
    <div class="grid_6" id="eventbox"><label class="inline_calendar">CXOApp ¡Conectando Personas!</label>
    	<div class="hidden_calendar"></div>
    </div>
    <!--RIGHT TEXT/CALENDAR END-->
    <div class="clear">
    </div>
    <!--  TITLE END  -->    
    <!-- #PORTLETS START -->
    <div id="portlets">
    <!-- FIRST SORTABLE COLUMN START -->
      <div class="column" id="left">
      <!--THIS IS A PORTLET-->
        		<div class="portlet">
                    <div class="portlet-header"><img src="images/icons/google_icon.png" width="16" height="16" alt="Reports" /> Cuenta de Google</div>
                    <div class="portlet-content">
                    <!--THIS IS A PLACEHOLDER FOR FLOT - Report & Graphs -->
                    <!--div id="placeholder" style="width:auto; height:auto;"></div-->

                    <h1 class="texto1" class="grid_16">Iniciar Sesión</h1>

                    <button class="botonimagen" onclick="abrir()"></button> 

                    
                    </div>  
                </div> 

                <div class="portlet">
                    <div class="portlet-header"><img src="images/icons/api_icon.gif" width="16" height="16" alt="Reports" /> API Gmail y Admin-SDK</div>
                    <div class="portlet-content">
                    <!--THIS IS A PLACEHOLDER FOR FLOT - Report & Graphs -->
                    <h1 class="texto1" class="grid_16">Acceder a las Api's</h1>

                    <button class="botonimagen2" onclick="autenticar()"></button> 

                    
                    </div>
                </div>           
              <!--THIS IS A PORTLET-->
               
      </div>
      <!-- FIRST SORTABLE COLUMN END -->
      <!-- SECOND SORTABLE COLUMN START -->
      <div class="column">
      <!--THIS IS A PORTLET-->        
        <div class="portlet">
        		<div class="portlet-header"><img src="images/icons/user.gif" width="16" height="16" alt="Comments" />Verificación de Usuarios</div>

        		<div class="portlet-content">

            <button id="carga" class="boton-carga" onclick="manejar()"> Cargar </button>
             

                 
              <pre id="output" class="salida"></pre>


            </div>
         </div>    
          <!--THIS IS A PORTLET--> 
                                   
      </div>
	<!--  SECOND SORTABLE COLUMN END -->
    <div class="clear"></div>
    <!--THIS IS A WIDE PORTLET-->
    
<!--  END #PORTLETS -->  
   </div>
    <div class="clear"> </div>
<!-- END CONTENT-->    
  </div>
<div class="clear"> </div>

<!-- WRAPPER END -->		
</div>

<!-- FOOTER START -->
<div class="container_16" id="footer"> Website Administration by <a href="admin.php">CXOApp 2016 ®</a></div>
<!-- FOOTER END -->
</body>
</html>
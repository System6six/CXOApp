  /*Administracion de las API's Gmail & Admin SDK*/

var idCliente = '413980216335-5rc1srh7u8lj7umalsk8djpr3s61f282.apps.googleusercontent.com'; //ID kevin.nieves@cxoapp.cf
//var alcance = ['https://www.googleapis.com/auth/admin.reports.audit.readonly'];
var alcance = ['https://www.googleapis.com/auth/admin.reports.usage.readonly https://www.googleapis.com/auth/gmail.readonly'];

var num_usuario = 0 ;
var estado = -1;
var cambio = 0;
var dato = new Date('2016-03-28');
var inicio = new Date('2016-03-28');
var dato2;
var fecha;
var dato3 = new Date('2016-03-28');
var dato4;
var fecha2;
var kevin = 0;
var alexis = 0;
var juancho = 0;
var cristian = 0;
var andres= 0;
var admin = 0;
var totalMensajes = 0;
/*var dato = new Date('2016-03-28');
dato.setDate(dato.getDate()+1);
var dato2 = dato.toISOString();
var fecha = dato2.slice(0,10);*/

function autenticar() {

    estado++;

    gapi.auth.authorize(
      {
        'client_id': idCliente,
        'scope': alcance.join(' '),
        'immediate': false,
        'authuser': -1
      }, mensaje);

}

function mensaje(){

  alert('Autenticación Exitosa!');

  /*var correo;

  gapi.client.load('oauth2', 'v2', function(){
    
   gapi.client.oauth2.userinfo.get().execute(function(resp){
      // Shows user email

      alert('Autenticación Exitosa!\n'+ resp.email +'\nUsuarios: '+estado);
    });

 });*/

}



function comprobar(authResult) {

  if(authResult.status.signed_in){
    //alert(authResult.status.signed_in);
      //inicioSesion();
      usuarios();

  }else{
    autorizarUsuarios();
  }

  //Concurrent.Thread.create(listarMensajesAdmin);
  //var dato = document.getElementById('usuarios').value;
      //alert(dato);
}

function ejecutar(){


    gapi.auth.authorize(
      {
        'client_id': idCliente,
        'scope': alcance.join(' '),
        'immediate': true,
        'authuser': estado
      }, function(){

        cargarReporteGmail();
        cargarReporteAdmin();
      });

}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function manejoAutenticacion(authResult) {
  
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    //authorizeDiv.style.display = 'none';
    Concurrent.Thread.create(cargarReporteAdmin);
    Concurrent.Thread.create(cargarReporteGmail);
    //cargarReporteAdmin();
    //cargarReporteGmail();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/**
 * Load Reports API client library. List login activity once client
 * library is loaded.
 */
function cargarReporteAdmin() {

  gapi.client.load('admin', 'reports_v1', function() {
    
    listarMensajesAdmin();
    listarTotalMensajesAdmin();
  });
}

function cargarReporteGmail() {
  
  gapi.client.load('gmail', 'v1', listarRecibidosGmail);
}

/**
 * Print the last 10 login events.
 */
function listarMensajesAdmin() {

  for(p=0; p<22; p++){

    dato.setDate(dato.getDate()+1);
    dato2 = dato.toISOString();
    fecha = dato2.slice(0,10);
    
    var request = gapi.client.reports.userUsageReport.get({
      'date': fecha,
      'userKey': 'all',
      'parameters': ['gmail:num_emails_exchanged']
      //'filters': ['gmail']:['num_emails_exchanged']['>']['2016-03-31']
        
    });

    request.execute(function(resp) {
      var consulta = resp.usageReports;
      //appendPre('Reporte Usuarios:');
      //appendPre('consulta:'+consulta.length);

      if (consulta && consulta.length > 0) {
        for (i = 0; i < consulta.length; i++) {
          var activity = consulta[i];
          /*appendPre('-' + activity.date + ': ' + activity.entity.userEmail
            + ' (' + activity.parameters[0].intValue + ')');*/    

          if(activity.entity.userEmail=='kevin.nieves@cxoapp.cf'){
              kevin = kevin + parseInt(activity.parameters[0].intValue);
              //appendPre('kevin: '+kevin);
          }

          if(activity.entity.userEmail=='cristian.rojas@cxoapp.cf'){
              cristian = cristian + parseInt(activity.parameters[0].intValue);
              //appendPre('cristian: '+cristian);
          }

          if(activity.entity.userEmail=='juan.baez@cxoapp.cf'){
              juancho = juancho + parseInt(activity.parameters[0].intValue);
              //appendPre('juancho: '+juancho);
          }

          if(activity.entity.userEmail=='alexis.sierra@cxoapp.cf'){
              alexis = alexis + parseInt(activity.parameters[0].intValue);
              //appendPre('alexis: '+alexis);
          }

          if(activity.entity.userEmail=='andrew.reina@cxoapp.cf'){
              andres = andres + parseInt(activity.parameters[0].intValue);
              //appendPre('andres: '+andres);
          }

          if(activity.entity.userEmail=='admin@cxoapp.cf'){
              admin = admin + parseInt(activity.parameters[0].intValue);
              //appendPre('andres: '+andres);
          }


        }
      } else {
        //appendPre('Mensajes Admin no encontrados');
      }
    });

  }


}

function mostrar(){

  appendPre('fecha Inicio: '+ inicio.toISOString());
  //appendPre('fecha Fin: '+ dato2);

  appendPre('kevin: '+kevin);
  appendPre('cristian: '+cristian);
  appendPre('juancho: '+juancho);
  appendPre('alexis: '+alexis);
  appendPre('andres: '+andres);
  appendPre('admin: '+admin);
  appendPre('totalMensajes: '+totalMensajes);
}

function listarTotalMensajesAdmin() {

    for(s=0; s<22; s++){

        dato3.setDate(dato3.getDate()+1);
        dato4 = dato3.toISOString();
        fecha2 = dato4.slice(0,10);
          
        //appendPre('CXOApp Clientes');
        var request = gapi.client.reports.customerUsageReports.get({
          'date': fecha2,
          'parameters': 'gmail:num_emails_exchanged'
          //'filters': ['gmail']:['num_emails_exchanged']['>']['2016-03-31']
            
        });

        request.execute(function(resp) {
          var consulta = resp.usageReports;
          //appendPre('Reporte Clientes:');
          //appendPre('consulta:'+consulta.length);

          if (consulta && consulta.length > 0) {
            for (i = 0; i < consulta.length; i++) {
              var activity = consulta[i];
              //appendPre('-' + activity.date + ': ' + ' (' + activity.parameters[0].intValue + ')');

              totalMensajes = totalMensajes + parseInt(activity.parameters[0].intValue);

            }
          } else {
            //appendPre('Mensajes Totales Admin no encontrados');
          }
        });


    }

}

function listarRecibidosGmail() {
  
  var request = gapi.client.gmail.users.messages.list({
    'userId': 'me'
    //'q': 'from:juan.baez@cxoapp.cf'
  });

  var request2 = gapi.client.gmail.users.getProfile({
    'userId': 'me'
    //'q': 'from:juan.baez@cxoapp.cf'
  });

  request.execute(function(resp) {

    var mensajes = resp.messages;
    appendPre('Mensajes Recibidos:' +mensajes.length);

    if (mensajes && mensajes.length > 0) {
      for (i = 0; i < mensajes.length; i++) {
        var consulta = mensajes[i];
        //appendPre('Mensaje id: '+consulta.id);
      }
    } else {
      appendPre('Mensajes no encontrados');
    }
  });

  request2.execute(function(resp) {
    var correo = resp.emailAddress;
    appendPre('Correo:' +correo);

  });


}



/**
 * Append a pre element to the body containing the given message
 * as its text node.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}
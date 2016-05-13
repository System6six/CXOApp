  /*Administracion de las API's Gmail & Admin SDK*/
var idCliente = '465088793884-ujv3je9kqm7jhp7ia3lp70udbi5c4llq.apps.googleusercontent.com'; //ID cristian.rojas@cxoapp.ga
//var idCliente2 = '413980216335-5rc1srh7u8lj7umalsk8djpr3s61f282.apps.googleusercontent.com'; //ID kevin.nieves@cxoapp.cf
//var alcance = ['https://www.googleapis.com/auth/admin.reports.audit.readonly'];
var alcance = ['https://www.googleapis.com/auth/admin.reports.usage.readonly https://www.googleapis.com/auth/gmail.readonly'];

var num_usuario = 0 ;
var estado = -1;
var cambio = -1;
var dato = new Date('2016-03-28');
var inicio = new Date('2016-03-28');
var inicio2 = inicio.toISOString();
var inicio3 = inicio2.slice(0,10);
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
var ctr = 0;
var ctr2 = 0;
var total1;
var total2;
var total3;
var total4;
var total5;
var total6;
var total7;
var total8;
var total9;
var total10;
var total11;
var total12;
var total13;
var total14;
var total15;
var total16;
var total17;
var total18;
var total19;
var total20;
var control;
var control2;
var solicitud;
var cliente;
/*var dato = new Date('2016-03-28');
dato.setDate(dato.getDate()+1);
var dato2 = dato.toISOString();
var fecha = dato2.slice(0,10);*/

function autenticar() {

    //estado++;

  gapi.auth.authorize(
      {
        'client_id': idCliente,
        'scope': alcance.join(' '),
        'immediate': false,
        'authuser': -1
      }, manejoAutenticacion);    

}

function manejar(){

  control = setInterval(function(){

    autenticarUsuarios();

  },2000);


}

function autenticarUsuarios() {

    estado++;

  gapi.auth.authorize(
      {
        'client_id': idCliente,
        'scope': alcance.join(' '),
        'immediate': true,
        'authuser': estado
      }, cargaUsuarios);    

}


function comprobarUsuario() {

  var request = gapi.client.gmail.users.getProfile({
    'userId': 'me'
  });

  request.execute(function(resp) {
    var usuario = resp.emailAddress;

    if(usuario){

      if(usuario=='cristian.rojas@cxoapp.ga'){

        cliente = usuario;
      }

      

      appendPre("Usuario: "+usuario);


    }else{
      clearInterval(control);
      control2 = setInterval('ejecutar()',4000);
    }
    
  });

}

function cargaUsuarios() {
  
  gapi.client.load('gmail', 'v1', function(){

    comprobarUsuario();

  });
}


function ejecutar(){

    if(cambio==-1){
      appendPre("BIENVENIDOS A CXOApp\n");
      
    }
    
      
    cambio++;

    if(cambio<2){

    gapi.auth.authorize(
      {
        'client_id': idCliente,
        'scope': alcance.join(' '),
        'immediate': true,
        'authuser': cambio
      }, function(){

        if(cliente=='cristian.rojas@cxoapp.ga'){
          cargarReporteAdmin();
          
        }
        cargarReporteGmail();
        


      });

    }

    if(cambio==2){
       mostrar();
       clearInterval(control2);
    }

}


function manejoAutenticacion(authResult) {
  
  if (authResult && !authResult.error) {
    
    alert('Autenticación Exitosa!');

  } else {
   
   alert('Error en la Autenticación!');
  }
}

function cargarReporteAdmin() {

  gapi.client.load('admin', 'reports_v1', function() {
    
    listarMensajesAdmin();
    listarTotalMensajesAdmin();
  });
}

function cargarReporteGmail() {
  
  gapi.client.load('gmail', 'v1', function(){

    listarRecibidosGmail();
    listarRecibidosUsuarios();

  });
}

function listarMensajesAdmin() {

  for(p=0; p<42; p++){

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

          if(activity.entity.userEmail=='kevin.nieves@cxoapp.ga'){
              kevin = kevin + parseInt(activity.parameters[0].intValue);
              //appendPre('kevin: '+kevin);
          }

          if(activity.entity.userEmail=='cristian.rojas@cxoapp.ga'){
              cristian = cristian + parseInt(activity.parameters[0].intValue);
              //appendPre('cristian: '+cristian);
          }

          if(activity.entity.userEmail=='juan.baez@cxoapp.ga'){
              juancho = juancho + parseInt(activity.parameters[0].intValue);
              //appendPre('juancho: '+juancho);
          }

          if(activity.entity.userEmail=='alexis.sierra@cxoapp.ga'){
              alexis = alexis + parseInt(activity.parameters[0].intValue);
              //appendPre('alexis: '+alexis);
          }

          if(activity.entity.userEmail=='andres.reina@cxoapp.ga'){
              andres = andres + parseInt(activity.parameters[0].intValue);
              //appendPre('andres: '+andres);
          }

          /*if(activity.entity.userEmail=='admin@cxoapp.ga'){
              admin = admin + parseInt(activity.parameters[0].intValue);
              //appendPre('andres: '+andres);
          }*/

        }
      } else {
        //appendPre('Mensajes Admin no encontrados');
      }
    });

  }


}

function mostrar(){

  appendPre("\nTOTAL MENSAJES DEL GRUPO");
  appendPre('fecha Inicio: '+ inicio3);

  appendPre('kevin: '+kevin);
  appendPre('cristian: '+cristian);
  appendPre('juancho: '+juancho);
  appendPre('alexis: '+alexis);
  appendPre('andres: '+andres);
  //appendPre('admin: '+admin);
  appendPre('totalMensajes: '+totalMensajes);
}

function listarTotalMensajesAdmin() {

    for(s=0; s<42; s++){

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

  if(ctr==0){
    appendPre("TOTAL MENSAJES EN BANDEJA DE ENTRADA GMAIL");
    ctr = 1;
  }
   var total=0;
  
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
    //appendPre('Mensajes Recibidos:' +mensajes.length);
    total = mensajes.length;

    request2.execute(function(resp) {
    var correo = resp.emailAddress;
    appendPre(correo + ": " + total);

  });


    if (mensajes && mensajes.length > 0) {
      for (i = 0; i < mensajes.length; i++) {
        var consulta = mensajes[i];
        //appendPre('Mensaje id: '+consulta.id);
      }
    } else {
      appendPre('Mensajes no encontrados');
    }
  });

}


function listarRecibidosUsuarios() {

  if(ctr2==0){
    appendPre("\nMENSAJES RECIBIDOS POR USUARIO");
    ctr2 = 1;
  }


  var request = gapi.client.gmail.users.getProfile({
    'userId': 'me'
    //'q': 'from:juan.baez@cxoapp.cf'
  });

  request.execute(function(resp) {
    var correo = resp.emailAddress;
    //appendPre(correo + ": " + total);

    if(correo=='cristian.rojas@cxoapp.ga'){

      appendPre("\n");

      
       var request2 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:kevin.nieves@cxoapp.ga'
      });

      request2.execute(function(resp) {

        var mensajes2 = resp.messages;

        if (mensajes2 && mensajes2.length > 0) {
          total1 = mensajes2.length;
          appendPre('Kevin: ' +mensajes2.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request3 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:juan.baez@cxoapp.ga'
      });

      request3.execute(function(resp) {

        var mensajes3 = resp.messages;

        if (mensajes3 && mensajes3.length > 0) {
          total2 = mensajes3.length;
          appendPre('Juancho :' +mensajes3.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request4 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:alexis.sierra@cxoapp.ga'
      });

      request4.execute(function(resp) {

        var mensajes4 = resp.messages;

        if (mensajes4 && mensajes4.length > 0) {
          total3 = mensajes4.length;
          appendPre('Alexis: ' +mensajes4.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request5 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:andres.reina@cxoapp.ga'
      });

      request5.execute(function(resp) {

        var mensajes5 = resp.messages;

        if (mensajes5 && mensajes5.length > 0) {
          total4 = mensajes5.length;
          appendPre('Andres: ' +mensajes5.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });

      }

    if(correo=='kevin.nieves@cxoapp.ga'){

      appendPre("\n");


      var request2 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:cristian.rojas@cxoapp.ga'
      });

      request2.execute(function(resp) {

        var mensajes2 = resp.messages;

        if (mensajes2 && mensajes2.length > 0) {
          total5 = mensajes2.length;
          appendPre('Cristian: ' +mensajes2.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request3 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:juan.baez@cxoapp.ga'
      });

      request3.execute(function(resp) {

        var mensajes3 = resp.messages;

        if (mensajes3 && mensajes3.length > 0) {
          total6 = mensajes3.length;
          appendPre('Juancho :' +mensajes3.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request4 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:alexis.sierra@cxoapp.ga'
      });

      request4.execute(function(resp) {

        var mensajes4 = resp.messages;

        if (mensajes4 && mensajes4.length > 0) {
          total7 = mensajes4.length;
          appendPre('Alexis: ' +mensajes4.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request5 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:andres.reina@cxoapp.ga'
      });

      request5.execute(function(resp) {

        var mensajes5 = resp.messages;

        if (mensajes5 && mensajes5.length > 0) {
          total8 = mensajes5.length;
          appendPre('Andres: ' +mensajes5.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });
      
    }

    if(correo=='juan.baez@cxoapp.ga'){

      appendPre("\n");


      var request2 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:kevin.nieves@cxoapp.ga'
      });

      request2.execute(function(resp) {

        var mensajes2 = resp.messages;

        if (mensajes2 && mensajes2.length > 0) {
          total9 = mensajes2.length;
          appendPre('Kevin: ' +mensajes2.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request3 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:cristian.rojas@cxoapp.ga'
      });

      request3.execute(function(resp) {

        var mensajes3 = resp.messages;

        if (mensajes3 && mensajes3.length > 0) {
          total10 = mensajes3.length;
          appendPre('Cristian :' +mensajes3.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request4 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:alexis.sierra@cxoapp.ga'
      });

      request4.execute(function(resp) {

        var mensajes4 = resp.messages;

        if (mensajes4 && mensajes4.length > 0) {
          total11 = mensajes4.length;
          appendPre('Alexis: ' +mensajes4.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request5 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:andres.reina@cxoapp.ga'
      });

      request5.execute(function(resp) {

        var mensajes5 = resp.messages;

        if (mensajes5 && mensajes5.length > 0) {
          total12 = mensajes5.length;
          appendPre('Andres: ' +mensajes5.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });

    }

    if(correo=='alexis.sierra@cxoapp.ga'){

      appendPre("\n");


      var request2 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:kevin.nieves@cxoapp.ga'
      });

      request2.execute(function(resp) {

        var mensajes2 = resp.messages;

        if (mensajes2 && mensajes2.length > 0) {
          total13 = mensajes2.length;
          appendPre('Kevin: ' +mensajes2.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request3 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:juan.baez@cxoapp.ga'
      });

      request3.execute(function(resp) {

        var mensajes3 = resp.messages;

        if (mensajes3 && mensajes3.length > 0) {
          total14 = mensajes3.length;
          appendPre('Juancho :' +mensajes3.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request4 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:cristian.rojas@cxoapp.ga'
      });

      request4.execute(function(resp) {

        var mensajes4 = resp.messages;

        if (mensajes4 && mensajes4.length > 0) {
          total15 = mensajes4.length;
          appendPre('Cristian: ' +mensajes4.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request5 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:andres.reina@cxoapp.ga'
      });

      request5.execute(function(resp) {

        var mensajes5 = resp.messages;

        if (mensajes5 && mensajes5.length > 0) {
          total16 = mensajes5.length;
          appendPre('Andres: ' +mensajes5.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });
      
    }

    if(correo=='andres.reina@cxoapp.ga'){

      appendPre("\n");


      var request2 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:kevin.nieves@cxoapp.ga'
      });

      request2.execute(function(resp) {

        var mensajes2 = resp.messages;

        if (mensajes2 && mensajes2.length > 0) {
          total17 = mensajes2.length;
          appendPre('Kevin: ' +mensajes2.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request3 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:juan.baez@cxoapp.ga'
      });

      request3.execute(function(resp) {

        var mensajes3 = resp.messages;

        if (mensajes3 && mensajes3.length > 0) {
          total18 = mensajes3.length;
          appendPre('Juancho :' +mensajes3.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request4 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:alexis.sierra@cxoapp.ga'
      });

      request4.execute(function(resp) {

        var mensajes4 = resp.messages;

        if (mensajes4 && mensajes4.length > 0) {
          total19 = mensajes4.length;
          appendPre('Alexis: ' +mensajes4.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });


      var request5 = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': 'from:cristian.rojas@cxoapp.ga'
      });

      request5.execute(function(resp) {

        var mensajes5 = resp.messages;

        if (mensajes5 && mensajes5.length > 0) {
          total20 = mensajes5.length;
          appendPre('Cristian: ' +mensajes5.length);

        } else {
          appendPre('Mensajes no encontrados');
        }
        
        });

    }

  });

}


function appendPre(message) {
  var pre = document.getElementById('output');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}
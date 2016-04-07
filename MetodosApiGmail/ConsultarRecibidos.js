function consultarRecibidos(idUsuario, consulta){

        //var idUsuario = "me";
        //var consulta = "from:juan.baez@cxoapp.cf"
        var request = gapi.client.gmail.users.messages.list({
          'userId': idUsuario,
          'q': consulta
        });
        request.execute(function(resp) {
          var messages = resp.messages;
          var output = "<br>Query returned " + messages.length + " messages:<br>";
          for(var i = 0; i < messages.length; i++) {
            output += messages[i].id + "<br>";
          }
          document.getElementById("content").innerHTML += output;
        });

      }

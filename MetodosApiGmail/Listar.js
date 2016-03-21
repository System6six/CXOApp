
function listMessages() 
      {
        var userId = "me";
        var request = gapi.client.gmail.users.messages.list({
          'userId': userId
        });
        request.execute(function(resp) 
	{
          var messages = resp.messages;
          var output = "<br>Query returned " + messages.length + " messages:<br>";
	  M_Juan = messages.length;
          for(var i = 0; i < messages.length; i++) 
	  {
            output += messages[i].id + "<br>";
          }
          document.getElementById("content").innerHTML += output;
        });
      }

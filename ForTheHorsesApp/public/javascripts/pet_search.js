('button.load').onclick = function(){
    var request;
    if(window.XMLHttpRequest){
      request = new XMLHttpRequest();
    }
    else {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET', 'pets1.json');
    request.onreadystagechange = function(){
      
        if((request.readyState === 4)&&(request.status === 200)){
          var items = JSON.parse(request.responseText);
          console.log(items);
          var output = "<ul>";
          for(var key in items){
            output += "<li>" + items[key].bio + "</li>";
          }
          output += "</ul>";
          document.getElementById("update").innerHTML = output;
        };
         request.send();
    }
  }
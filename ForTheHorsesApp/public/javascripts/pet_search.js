//  https://stackoverflow.com/a/34579496

function readStuff(){
  if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
  }
  else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  request.overrideMimeType("application/json");
  if (reqType === "Cat") {
    request.open("GET", 'data/cats.json', true);
  }
  else {
    request.open("GET", 'data/dogs.json', true);
  }
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status == "200") {
      var items = JSON.parse(request.responseText);
          console.log(items);
          var output = "<ul>";
          for(var key in items.pets){
            // should call function formatEntry w/ parameter items.pets[key] to put the thing on the page
            console.log(key);
            output += "<li>" + items.pets[key].name + "</li>";
            output += "<li>" + items.pets[key].species + "</li>";
            output += "<img src=\"" + items.pets[key].photos[0] + "\">";
          }
          output += "</ul>";
          document.getElementById("update").innerHTML = output;
    }
  }
  request.send(null);
}
  /*
  var request;
    if(window.XMLHttpRequest){
      request = new XMLHttpRequest();
    }
    else {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    request.open('GET', "data/pets.json");
    console.log(request.readyState);
    console.log(request.status);

    var items_test = JSON.parse(request.responseText);
    console.log(items_test);

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

  /*
I don't know where this is supposed to go

// pets is the data

// Full credit to Brad Traversy.
// https://github.com/bradtraversy/find_a_pet/blob/master/js/main.js

function showAnimals(pets) {
  const results = document.querySelector("#results"); // need to put a corresponding div #results somewhere

  // clear results first
  results.innerHTML = "";

  // loop through pets
  pets.forEach((pet) => {
    // console.log(pet);
    // create elements
    const div = document.createElement("div");
    div.classList.add("card", "card-body", "mb-3");
    div.innerHTML = `
      <div class="row">
        <div class="col-sm-6">
          <h4>${pet.name} (${pet.age})</h4>
          <p class="text-secondary">${pet.breeds.primary}</p>
          <p>${pet.contact.address.city}, ${pet.contact.address.state} ${
      pet.contact.address.postcode
    }</p>
          <ul class="list-group">
            <li class="list-group-item">${
              pet.contact.phone
                ? `<li class="list-group-item">Phone: ${pet.contact.phone}</li>`
                : ``
            }</li>
            ${
              pet.contact.email
                ? `<li class="list-group-item">Email: ${pet.contact.email}</li>`
                : ``
            }
            <li class="list-group-item">Shelter ID: ${pet.organization_id}</li>
          </ul>
        
        </div>
        <div class="col-sm-6">
        <img class="img-fluid rounded-circle mt-2" src="${
          pet.photos[0] ? pet.photos[0].medium : "" // what is .medium ???? do we need that?????
        }">
        </div>
      </div>
    `;
    results.appendChild(div);
  });
}


*/
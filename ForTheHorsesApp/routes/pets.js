
var express = require('express');
var router = express.Router();
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
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pets', { page:'pets', menuId:'pets' });
});
module.exports = router;


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
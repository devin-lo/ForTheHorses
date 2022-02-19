//  https://stackoverflow.com/a/34579496 <- used this code to read the JSONs

function readListings(pgSrc){
    // https://www.sitepoint.com/get-url-parameters-with-javascript
    // ^ this allows the search page to be accessed from the home page using the animal icons
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (pgSrc !== 2 || urlParams.has('animal'))
    {
        var petType = document.getElementById("animal");
        if (urlParams.has('animal'))
            petType.value = urlParams.get('animal');
        if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
        }
        else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        request.overrideMimeType("application/json");
        request.open("GET", 'data/pets.json', true);
        request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status == "200") {
            const results = document.querySelector("#listings"); // need to put a corresponding div #results somewhere
    
            // clear results first
            results.innerHTML = "";

            var items = JSON.parse(request.responseText);
                console.log(items);
                // var output = "<ul>";
                for(var key in items.pets){
                // should call function formatEntry w/ parameter items.pets[key] to put the thing on the page
                console.log(items.pets[key]);
                if (pgSrc === 1)
                    formatEntry(items.pets[key]);
                else {
                        var reqType = petType.options[petType.selectedIndex].value;
                        if (items.pets[key].species === reqType)
                            formatEntry(items.pets[key]);
                        else if (reqType === "Other" && items.pets[key].species !== "Dog" && items.pets[key].species !== "Cat")
                            formatEntry(items.pets[key]);
                }

                /*
                output += "<li>" + items.pets[key].name + "</li>";
                output += "<li>" + items.pets[key].species + "</li>";
                output += "<img src=\"" + items.pets[key].photos[0] + "\">";
                */
                }
                // output += "</ul>";
                // document.getElementById("org_listings").innerHTML = output;
        }
        }
        request.send(null);
    }
  }
  
  // pets is the data
  
  // Credit to Brad Traversy for this code, which constructs a div element for each listing in the JSON
  // https://github.com/bradtraversy/find_a_pet/blob/master/js/main.js
  
  function formatEntry(pet) {
    const results = document.querySelector("#listings"); // need to put a corresponding div #results somewhere

      // create elements
      const div = document.createElement("div");
      // div.classList.add("card", "card-body", "mb-3");
      div.innerHTML = `
        <div class="row">
          <div class="col-sm-6">
            <h4>${pet.name} (${pet.age})</h4>
            <p class="text-secondary">${pet.breeds.primary}</p>
            <p>${pet.contact.address.city}, ${pet.contact.address.state} ${
                pet.contact.address.zip
              }</p>
            <ul class="list-group">
              ${
                pet.contact.phone
                  ? `<li class="list-group-item">Phone: ${pet.contact.phone}</li>`
                  : ``
              }
              ${
                pet.contact.email
                  ? `<li class="list-group-item">Email: ${pet.contact.email}</li>`
                  : ``
              }
              <li class="list-group-item">Shelter ID: ${pet.organization_id}</li>
            </ul>
          
          </div>
          <div class="col-sm-6">
          <img class="img-fluid rounded-circle mt-2 img-rz" src="${
            pet.photos[0] ? pet.photos[0] : "" // what is .medium ???? do we need that?????
          }">
          </div>
        </div>
      `;
      console.log(div);
      results.appendChild(div);
    }
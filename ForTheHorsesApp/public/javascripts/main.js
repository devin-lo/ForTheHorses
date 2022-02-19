import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);


function fetchAnimals(e){
e.preventDefault();

const animal= document.querySelector('#animal').ariaValueMax;
const zip= document.querySelector('#zip').ariaValueMax;


fetchJsonp('http://api.petfinder.com/pet.find?format=json&key=7RUu4PZKAZytaa15oe7yi3JSXoTvbGBy9zfgZGvxX8cKNw0SFp&animal=${animal}&location=${zip}&callback=callback')
jsonpCallbackFunction: 'callback'

}
.then(res=>res.json())
.then(data=> console.log(data))
.catch(err=> console.log(err));
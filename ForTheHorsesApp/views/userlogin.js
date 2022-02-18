//function for login
var express = require('express');
var app = express();
app.set('view engine', 'ejs'); // set the view engine to ejs

app.get('/', function(req, res) {res.render('pages/index');}); // index page 
app.get('/about', function(req, res) {    res.render('pages/about');}); // about page 

app.listen(8080);
console.log('Portal is listening to port 8080 ');




var objUser=[{
    username:"ethan",
    password:"test"
},
{
    username:"jonathan",
    password:"test"
}
]
function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for(i=0; i<objUser.length; i++)
    {
        if(username==objUser[i].username && password==objUser.password){
            console.log(username+"is logged in")
            return
        }
    }
    console.log("incorrect username and password");
}
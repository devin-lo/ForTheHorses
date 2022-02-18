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
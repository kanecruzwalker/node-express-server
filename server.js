// variable needed for app
const express = require("express");
const app = express();


// a get 
app.get("/", function(request, response){
    response.send("Hello");
});




// listener to start the app on a port
app.listen(3000, function () {
    console.log("Server Started on Port 3000");
});
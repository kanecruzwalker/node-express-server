// variable needed for app
const express = require("express");
const app = express();


// a get route 
// for root directory /
// with response
app.get("/", function(request, response){
    response.send("Hello");
});

app.get("/a", function(req, res){
    res.send("I am page 2");
});




// listener to start the app on a port
app.listen(3000, function () {
    console.log("Server Started on Port 3000");
});
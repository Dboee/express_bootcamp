// SETUP
var express = require("express");
var app = express();


// ROUTES
app.get("/", function(req, res){
    res.send("Hi there!");
});


// LISTENER
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});
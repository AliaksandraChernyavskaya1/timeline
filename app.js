var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/vis/dist'));
app.get("*", function(req, res){
    res.render("index.html"); 
});

app.listen('8000','localhost',function(){
   console.log("Server has started"); 
});
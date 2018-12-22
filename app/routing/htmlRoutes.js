//Dependecies
var path = require("path");

// HTML routes
module.exports = function(app){
app.get("/:page", function(req, res) {
    var page = req.params.page;
    if(page === "survey"){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    }
    else{
    res.sendFile(path.join(__dirname, "../public/home.html"));   
    }
  });
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

var path = require("path");

var friendsData = require("../data/friends.js");

module.exports = function(app)  {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

  app.post("/api/friends", function(req, res) {
    
});
};



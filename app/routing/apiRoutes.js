var path = require("path");

var friendsData = require("../data/friends.js");

module.exports = function(app)  {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

  app.post("/api/friends", function(req, res) {
    
    var friendInput = req.body;
    var friendResponses = friendInput.scores;

    var matchName = "";
    var matchImage = "";
    var totalDifference = 10000;

    for (var i = 0; i < friends.length; i++ ) {
      var difference = 0;
      for (var j = 0; j < friendResponses.length; j++ ) {
        difference += Math.abs(friends[i].scores[j] - friendResponses[j]);
      }
      if (difference < totalDifference) {
        totalDifference = difference;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }

    friends.push(friendInput);

    res.json({status: "OK", matchName: matchName, matchImage: matchImage});
  });
};



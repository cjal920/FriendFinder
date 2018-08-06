var friendsData = require("../data/friends");

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });
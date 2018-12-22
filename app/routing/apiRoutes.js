var friendData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        var match = friendData[0];
        var diffs = [];
        for(var i=0;i<friendData.length;i++){
            var totalDiff = 0;
            for (var x=0;x<friendData[i].scores.length;x++){
                var compare = Math.abs(newFriend.scores[x] - friendData[i].scores[x]);
                totalDiff += compare;
            };
            diffs.push(totalDiff);
        };
        var least = Math.min(...diffs);
        for (var i=0;i<diffs.length;i++){
            if(diffs[i]===least){
                match=friendData[i];
            };
        };
        friendData.push(newFriend);
        res.json(match);
    });
};

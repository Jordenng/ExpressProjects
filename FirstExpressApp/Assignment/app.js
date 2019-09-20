
var express = require("express");
var app = express();

app.get("/", function (req,res) {
    res.send("welcome")

});
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal]
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = Number(req.params.num);
    var result = "";
    for(var i=0; i<num; i++){
        result += word +" ";
    }
    res.send(result);
});

app.get("*", function (req, res) {

    res.send("error");

})

app.listen(3000, function(){
    console.log("server has started");
});


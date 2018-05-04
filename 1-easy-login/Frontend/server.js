var fs = require('fs') ,express = require('express'),
app = express();

app.use(express.static(__dirname + "/build"));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, X-Codingpedia");
    next();
})


app.get('/', function(req, res){
    fs.readFile(__dirname + '/build/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

var server = app.listen(1523, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

var http = require("http"); //node documentation, http
var cool = require("cool-ascii-faces");
console.log(cool())
//createServer from http(piece of node library)
//creates a server
var server = http.createServer().listen(5000, 'localhost'); 
server.on("request", function(request, response) {
	console.log("hello world"); //prints when there's a request; until user goes to localhost
	response.write("<h1>random face</h1>" + "<p>"+ cool() + "</p>"); //puts face inside <p>
	response.write(cool()); //shows up on localhost
	response.end();
});
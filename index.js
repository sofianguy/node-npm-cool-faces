var http = require("http"); //node documentation, http
//http is built into node
//
var cool = require("cool-ascii-faces");
//createServer from http(piece of node library)
//require is import equivalent in Python
//so if i use "cool" it will take "cool" from cool-ascii-faces module

//creates a server
var server = http.createServer() //creating server object; http server

server.on("request", function(request, response) {
//"request" means each time web browser wants to connect
//function(request, response) --call back, 	
	//request is what browser sends to terminal
	//response is how you send things from terminal back to web browser

	response.write(cool()); //shows up on localhost
	//.write() writes to browser
	//can write code, e.g., html
	//console.log into the web browser
	response.end();//if you don't have .end(), then the browser will keep running. 
	console.log(request.url) //if request.url === do something; similar to Flask. 
	//express module will do this. so you don't put if statements.
});

server.listen(5000, 'localhost'); //name of server
//if do not specify port number, default is 80

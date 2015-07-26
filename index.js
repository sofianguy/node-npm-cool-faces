var http = require("http"); //node documentation, http
//http is built into node
//require is a built-in node function

var cool = require("cool-ascii-faces");
//createServer from http(piece of node library)
//require is like import in Python
//so if I use variable cool, it will take variable cool from 
// cool-ascii-faces module

var server = http.createServer() //creating server object; http server

server.on("request", function(request, response) {
//"request" means each time web browser wants to connect
//function(request, response) --call back, 	
	//request is what browser sends to terminal
	//response is how you send things from terminal back to web browser

	response.write(cool()); //shows up on localhost server
	//.write() writes to the browser
	//can also write code inside (), e.g., html code

	response.end();//if you don't have .end(), then the browser will keep running. 
	console.log(request.url) //if request.url === do something; similar to Flask. 
	//Express module will do this. 
	//So you don't put if statements.
});

server.listen(5000, 'localhost'); //name of server "localhost:5000"
//if port number is not specified, default is 80

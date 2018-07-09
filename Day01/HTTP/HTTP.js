//import HTTP
const http = require('http');

//callback 如果有人點我這個頁面 我就會回她一個Hello World
const onRequest = (request, response) => {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
};

//把這個HTTP-server的監聽放在3000 port
http.createServer(onRequest).listen(3000);
console.log("Server has started.");
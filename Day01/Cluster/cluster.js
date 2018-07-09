//inport
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

//master是控制workers的
//這個IF 判斷是不是master的節點，如果是的話則印出他的PID編號，並且印出
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        //創造worker的
        cluster.fork();
     }
     //然後master就離開。
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
  //之後收到的cluster就不是master了，即將改為worker的部分，就開始跳入到下面了。


} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    console.log(`${process.pid} get request`);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
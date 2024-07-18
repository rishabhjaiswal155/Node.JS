const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");
console.log(OS.cpus().length);
if (cluster.isMaster) {
  console.log(`Master process with ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`worker with ${process.pid} is started`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("slow-page");
    }
  });

  server.listen(8000, () =>
    console.log("server is up and running on port 8000")
  );
}

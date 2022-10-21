const http = require('http');

const port = 8081;

http
    .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Hello, this is from my Server</h1>");
        res.end();
    })
    .listen(port, () => {
        console.log(`Nodejs server started on ${port}`);
    });

    //http://localhost:8081
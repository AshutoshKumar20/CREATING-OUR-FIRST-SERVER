const http = require('http');

const port = 8081;

http
    .createServer((request, response) => {
        response.writeHead(200, { "Content-type": "text/html" });
        response.write("<h1>Hello, this is from my Server</h1>");
        response.end();
    })
    .listen(port, () => {
        console.log(`Nodejs server started on ${port}`);
    });

    //http://localhost:8081
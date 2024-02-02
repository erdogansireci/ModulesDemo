const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/"){
        res.end("Welcome to home page");
        return;
    }

    if (req.url === "/about"){
        res.end("About page");
        return;
    }

    //default message
    res.end(`
    <h1>Oops!</h1>
    <p>Page not found</p>
    <a href="/">back home</a>
    `);

});

const PORT = 8080;

server.listen(PORT);
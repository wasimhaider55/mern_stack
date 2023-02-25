const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
   const data =  fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");
        const objData = JSON.parse(data)

    if(req.url == "/") {
        res.end("Hellow from the home side ");
    } else if (req.url == "/about") {
        res.end("Hellow from the about side ");
    } else if (req.url == "/userApi") {
        res.writeHead(200, {"Content-type" : "application/josn"}); 
        res.end(objData[0].date)
    } else if (req.url == "/contact") {
    res.end("Hellow from the contact side ");
} else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end(" <h1>404 error page, does not exits </h1> ")
}

})

server.listen(8800, "127.0.0.1", () => {
    console.log("listening to the port number 8800")
});
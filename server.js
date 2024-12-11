const http = require("http")
const PORT = process.env.PORT || 3000
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
let templateString = fs.readFileSync(path.join('views','index.ejs'), 'utf-8');
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000,
    "Content-type": "application/json",
    "Content-type": "text/html"
  };

const server = http.createServer((req,res) => {
    res.writeHead(200,headers)
    res.end(ejs.render(templateString,{ name:'Cooper' }))
})

server.listen(PORT,() => {
    console.log(`PORT is running ${PORT}`);
    
})


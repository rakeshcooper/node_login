const http = require("http")
const PORT = process.env.PORT || 3000
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
let indexfile = fs.readFileSync(path.join('views','index.ejs'), 'utf-8');
let loginfile = fs.readFileSync(path.join('views','login.ejs'), 'utf-8');
let registerfile = fs.readFileSync(path.join('views','register.ejs'), 'utf-8');
 const headers = {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
                "Access-Control-Max-Age": 2592000,
                "Content-type": "application/json",
                "Content-type": "text/html"
            };



const server = http.createServer(async (req,res) => {
    // res.writeHead(200,await headerData())
    // res.end(ejs.render(templateString,{ name:'Coopers' }))

    try{
        if(req.url === '/login'){
            res.writeHead(200,headers)
            res.end(ejs.render(loginfile,{ name:'Coopers' }))
        } else if(req.url === '/register'){
            res.writeHead(200,headers)
            res.end(ejs.render(registerfile,{ name:'Cooperss' }))
        }
    } catch(err){
        console.log(err);
    }
})

server.listen(PORT,() => {
    console.log(`PORT is running ${PORT}`);
    
})


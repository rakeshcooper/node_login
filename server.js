const http = require("http")
const PORT = process.env.PORT || 3000
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
const bcrypt = require('bcrypt')
const users = []
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

    try{
        if(req.url === '/login'){
            res.writeHead(200,headers)
            res.end(ejs.render(loginfile))
        } else if(req.url === '/login' && req.method === 'POST'){
            res.writeHead(200,headers)
            res.end(ejs.render(loginfile))
        } else if(req.url === '/register'){
            res.writeHead(200,headers)
            res.end(ejs.render(registerfile))
        } else if(req.url === '/register' && req.method === 'POST'){
            const body = await bodyPostdata(req,res)
            const { name, email, password } = JSON.parse(body)
            try {
                // const hashedPassword = await bcrypt.hash(password,10)
                users.push({
                    id: Date.now().toString(),
                    name: name,
                    email: email,
                    password: password
                })
                // res.redirect('/login')
            } catch (error) {
                console.log(error);
                
                // res.redirect('/register')
            }
            res.writeHead(200,headers)
            res.end(ejs.render(users))
            console.log(name);
            
                
        }
    } catch(err){
        console.log(err);
         res.writeHead(200,headers)
         res.end(JSON.stringify({message: `The error is ${err}`}))
    }
})

function bodyPostdata(req,res) {
    try{
        return new Promise((resolve, reject) => {
            let body = ""
            req.on("data",(chunk) => {
                body += chunk.toString()
            })

            req.on("end", () => {
                resolve(body)
            })

        })
    }catch(err){
        reject(err)
        
    }
}


server.listen(PORT,() => {
    console.log(`PORT is running ${PORT}`);
    
})


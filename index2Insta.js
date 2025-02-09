const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); 
app.use(express.static(path.join(__dirname,"public/CSSDir")));
app.use(express.static(path.join(__dirname,"public/JSDir")));


const port = 3000;
app.listen(port,()=>{
    console.log(`The server is runnung at port ${port}`);
})


app.get("/ig/:username",(req,res)=>{
     let {username}=req.params;
     const instaData = require("./data.json");
     let userData= instaData[username];

     if(userData){    //means if() will be TRUE when user's name and data is present in instaData, instaData is considered as source
     console.log(instaData[username].name);
     res.render("index2Insta.ejs",{userData: instaData[username]});
     }

     else{res.render("error.ejs")}
})
 

app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/help",(req,res)=>{
    res.send("You need help!.. i am there");
})

app.get("*",(req,res)=>{
    res.render("error2.ejs")
})
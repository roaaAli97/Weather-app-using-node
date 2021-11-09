const forecast=require('./utils/forecast')
const geocode=require("./utils/geocode")
const hbs=require("hbs")
const express=require('express')
const path=require("path")
const directoryName=path.join(__dirname,"/public")

console.log(directoryName)
const viewsPath=path.join(__dirname+"/templates/views")
const partialsPath=path.join(__dirname+"/templates/partials")

hbs.registerPartials(partialsPath)
const app=express()

app.use(express.static(directoryName))
app.set("view engine","hbs")
app.set("views",viewsPath)
app.get('/',(req,res)=>{
    res.render("index",{title:"Weather app",name:"Roaa Ali"})
})

app.get("/weather",(req,res)=>{
    const query=req.query.address
    if(!query){
        return res.send({Error:"Address should be provided"})
    }
    geocode(query,(error,{latitude,longitude,location}={})=>{
        if(error){
         return res.send({Error:error})
        }
        
        forecast(latitude,longitude,(forecastError,{temperature,feelslike}={})=>{
           if(forecastError){
             return  res.send(forecastError)
           }
          return res.send({address:query,
        temperature,feelslike,location})
       })
    })
    
})


app.get("*",(req,res)=>{
    res.render("error",{title:"Error 404",errorMessage:"Page not found",name:"Roaa Ali"})
})
 


app.listen(3000,()=>{
    console.log("Server is running")
})
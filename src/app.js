const exp = require('constants');
const express = require('express');
const hbs = require('hbs');
require("./db/conn")
const app = express();
const port = process.env.PORT || 80;
const path = require('path');
const Studentregister = require('./models/register');

// setting the path
const staticPath = path.join(__dirname,"../public");
const partial_path = path.join(__dirname,"../templete/partials");
const templetes = path.join(__dirname, "../templete/views")

//middle ware
app.use(express.static(staticPath))
hbs.registerPartials(partial_path);
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine', 'hbs');
app.set("views",templetes);


console.log(staticPath)
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/service",(req,res)=>{
    res.render("service");
})
app.get("/gallery",(req,res)=>{
    res.render("gallery");
})
app.get("/covid",(req,res)=>{
    res.render("covid");
})

app.post("/contact", async (req,res)=>{
    try {
        const Studentmesage = new Studentregister({
        firstname:req.body.firstname,
        email:req.body.email,
        message:req.body.message,
        })
        // console.log("the success part" + Studentmesage); 
     const registered=  await Studentmesage.save();
        console.log("the page part"+registered);
        res.status(201).render("index");
    } catch (error) {
        console.log("dkld")
        console.log(error)
    }
    
}
)
app.listen(port,()=>{
    console.log(`sun rha hu bro ${port}`)
})

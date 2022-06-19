const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const hbs =require("hbs"); 
const Register = require("./models/register");


const port = process.env.PORT || 3000;

const static_path =path.join(__dirname, "../public");
const template_path = path.join( __dirname, "../templates/views");
const partial_file = path.join( __dirname, "../templates/partials");

// console.log(template_path);

// \templates\views

app.use(express.static(template_path));
app.set("view engine","hbs");
app.set("views", template_path);
hbs.registerPartials(partial_file);

app.get("/", (req, res) => {

    res.render("index.hbs")
});

app.get("/register", (req, res) => {

    res.render("/register");
});

app.post("/register", async( req, res) =>{
    try{
        console.log( req.body.name)
    } catch(err){
        res.status(400).send(err); 
    }
})
 
app.listen(port, () => {

    console.log(` Server is running at port no ${port}`)
})

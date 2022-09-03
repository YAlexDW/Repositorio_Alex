var express= require(`express`)
var app = express();
var mongoose = require("mongoose")
var bodyParser= require("body-parser")

mongoose.connect("mongodb+srv://AlexDw:lamborghinyspider15@cluster0.9suqqra.mongodb.net/BD_ingresos?retryWrites=true&w=majority")
.then(function(db){
    console.log("conectado a la base de datos")
})
.catch(function(err){
    console.log(err)
});

app.use(bodyParser.urlencoded({extended:true}))

var prods = require("./modelos/estructura");
const res = require("express/lib/response");

app.get("/inicio",function(req,res){
res.sendFile(__dirname + "/index.html")
})


app.get("/productos", async function(req,res){
    var busqueda=  await prods.find();
    var card= "";
    for(var i = 0; i<busqueda.length; i++){
        /* card = card + "<h5  class=card-title>" + busqueda[i].nombre + "</h5>";
        card = card + "<div>" + busqueda[i].url + "</div>";
        card = card + "<div>" + busqueda[i].precio + "</div>";
        card = card + "<div>" + busqueda[i].cantidad + "</div>"; */
        card = card + `<div class="container">`
        card = card + `<div class="card mb-3" style="width: 18rem;">`
        card = card + `<img src="..." class="card-img-top" alt="...">`
        card = card + `<div class="card-body">`
        card = card + `<h5 class="card-title">` + busqueda[i].nombre + `</h5>`
        card = card + `<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`
        card = card + `<a href="#" class="btn btn-primary">Go somewhere</a>`
        card = card + `</div>`
        card = card + `</div>`
    }
    res.send(card)
})










app.listen(3000,function(){console.log("servidor iniciado")})
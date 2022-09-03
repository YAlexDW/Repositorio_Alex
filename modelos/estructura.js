
var mongoose= require("mongoose");
var Schema= mongoose.Schema

var producto = new Schema({
    nombre:String,
    url: String,
    precio: Number,
    cantidad:Number

})

module.exports = mongoose.model("productos", producto)


/*<div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <img id="postre" src="https://www.pequerecetas.com/wp-content/uploads/2022/02/postres-caseros-faciles-y-rapidos.jpg" class="card-img-top" alt="..."
              height="300px" width="200px">
            <div class="card-body row">
              <div class="col-8">
                <h5 class="card-title">Postres</h5>
              </div>
              <!-- boton de info -->
              <div class="col-2">
                <button id="info" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#info">
                  <i class="fa-solid fa-info"></i>
                </button>
              </div>*/
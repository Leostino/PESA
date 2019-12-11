// require controller and path

const pesaController = require('../controller/controller');

module.exports = function(app) {
    app
    .get("/api/pesa",pesaController.findAll)
    .get("/api/pesa/:id", pesaController.findById)
    .post("/pesa", pesaController.create)
    .put("/api/pesa/:id", pesaController.update)
    .delete("/api/pesa/:id", pesaController.remove)
}
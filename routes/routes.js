// require controller and path

const pesaController = require('../controller/controller');

const axios = require("axios");

module.exports = function(app) {
    app
    .get("/api/pesa",pesaController.findAll)
    .get("/api/pesa/:id", pesaController.findById)
    .post("/pesa", pesaController.create)
    .put("/api/pesa/:id", pesaController.update)
    .delete("/api/pesa/:id", pesaController.remove)
    .post("/api/jobs", (req, res) => {


        console.log(req.body)

        const jobObj = {

            keyword: req.body.keyword,
            location: req.body.location

        }



        const api_key = "72423555f215d5d8c1fbe985a57e35bd";

        const endPoint = "https://authenticjobs.com/api/?api_key="+ api_key +"&method=aj.jobs.search&keywords="+ jobObj.keyword +"&perpage=10&location="+ jobObj.location +"&format=json"
        
        axios.get(endPoint, (req, res))
        .then(jobs => {
            
            console.log(jobs.data.listings.listing)

             res.json(jobs.data.listings.listing)
             
        })
        .catch(err => console.log(err))
    })
}
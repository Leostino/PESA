// require collection

const Pesa = require("../models/pesa");

// Defining methods for the pesaController

module.exports = {
  
  findAll: function(req, res) {
    Pesa
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Pesa
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("creating", req.body)
    Pesa
      .create(req.body)
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("updating",req.params.id, req.body)
    Pesa
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => console.log(dbModel) || res.json(dbModel))
      .catch(err => console.log(err) || res.status(422).json(err));
  },
  remove: function(req, res) {
    Pesa
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
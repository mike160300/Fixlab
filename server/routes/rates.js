const express = require('express')
const rates = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Rate = require('../models/rates')
rates.use(cors())

//Crear Publicación:
rates.route('/add').post(function (req,res)
{

  Rate.create({
    "id_user1": req.body.id_user1,
    "id_user2": req.body.id_user2, 
    "value": req.body.value
  }).then(() => {
      res.json();
    }).catch(err => {
      console.log(err);
      res.status(500).json({msg: "error", details: err});
    })

});





module.exports = rates;
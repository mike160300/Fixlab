const express = require('express')
const rates = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Rate = require('../models/rates')
rates.use(cors())

//Crear Rating:
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

rates.route('/update').post(function (req, res)
{

  const id = req.body.id_user1;
  const id2 = req.body.id_user2;
  Rate.update( req.body, 
      { where: {id_user1: id, id_user2: id2 } }).then(() => {
        res.json();
        console.log(res);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
});





module.exports = rates;
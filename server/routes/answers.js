const express = require('express');
const app = express();
const answers = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

// Require Business model in our routes module
let Answer = require('../models/answer');
answers.use(cors());

//Crear Publicación:
answers.route('/add').post(function (req,res)
{

	Answer.create({
		"id_answer": req.body.id_answer,
        "text": req.body.text,
        "price": req.body.price,
        "unlocked": req.body.unlocked,
        "valorated": req.body.valorated,
        "id_owner" : req.body.id_owner,
        "id_inpost": req.body.id_inpost
	}).then(() => {
			res.json();
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		})

});




module.exports = answers; 
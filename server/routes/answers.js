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
	const answerData ={
		id_answer: req.body.id_answer,
		text: req.body.text,
		price: req.body.price,
        valorated: req.body.valorated,
        unlocked: req.body.unlocked,
        id_owner: req.body.id_owner,
        id_inpost: req.body.id_inpost		
	}

	console.log(answerData);

	Answer.create(answerData).then(() => {
			res.json();
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		})

});

answers.route('/').get(function (req, res)
{
	Answer.findAll().then(aanswers => {
		res.json(aanswers.sort(function(c1, c2){return c1.id - c2.id}));
	}).catch(err => {
		console.log(err);
		res.status(500).json({msg: "error", details: err});
	})	
});

answers.route('/:id').get(function (req, res)
{
	Answer.findAll({
		where: {
   		id_inpost: req.params.id  
  	}}
	)

  	.then(aanswer => {
			res.json(aanswer);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		})
});

answers.route('/user/:id').get(function (req, res)
{
	Answer.findAll({
		where: {
   		id_owner: req.params.id  
  	}}
	)

  	.then(aanswer => {
			res.json(aanswer);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		})
});

answers.route('/update').post(function (req, res)
{

	const id = req.body.id_answer;
	Answer.update( req.body, 
			{ where: {id_answer: id} }).then(() => {
				res.json();
				console.log(res);
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
});

//Borra un post seleccionado:
answers.route('/delete/:id').delete(function (req, res)
{
	Answer.destroy({
			where: { id_answer : req.params.id }
		}).then(() => {
			res.status(200).json();
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		})
});



module.exports = answers; 
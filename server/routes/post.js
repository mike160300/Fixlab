const express = require('express');
const app = express();
const posts = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

//Modelo de Post:
let Publication = require('../models/post');
posts.use(cors());

//Crear Publicación:
posts.route('/add').post(function (req,res)
{

	Publication.create({
		"id_post": req.body.id_post,
		"title": req.body.title, 
		"description": req.body.description, 
		"image": req.body.image,
		"publish_date": req.body.publish_date,
		"resolved": req.body.resolved,
		"id_owner": req.body.id_owner
	}).then(() => {
			res.json();
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		})

});

//Obtener TODAS las publicaciones:
posts.route('/').get(function (req, res)
{
	Publication.findAll().then(pposts => {
		res.json(pposts.sort(function(c1, c2){return c1.id - c2.id}));
	}).catch(err => {
		console.log(err);
		res.status(500).json({msg: "error", details: err});
	})	
});

//Muestra los post propios del usuario:
posts.route('/:id').get(function (req, res)
{
	Publication.findAll({
		where: {
   		id_owner: req.params.id  
  	}}
	)

  	.then(pposts => {
			res.json(pposts);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		})
});

//Actualiza un post seleccionado:
posts.route('/update').post(function (req, res)
{

	const id = req.body.id_post;
	Publication.update( req.body, 
			{ where: {id_post: id} }).then(() => {
				res.json();
				console.log(res);
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
});

//Borra un post seleccionado:
posts.route('/delete/:id').delete(function (req, res)
{
	const id = req.params.id;
	console.log(id);
	Publication.destroy({
			where: { id_post : id }
		}).then(() => {
			res.status(200).json( { msg: 'Deleted Successfully -> Post Id = ' + id } );
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		})
});


module.exports = posts; 
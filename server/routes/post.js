const express = require('express');
const app = express();
const posts = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

// Require Business model in our routes module
let Publication = require('../models/post');
posts.use(cors());


//Crear post:
posts.route('/add').post(function (req, res) 
{

  let newpost = new Publication(req.body);
  newpost.save();

});




module.exports = posts; 
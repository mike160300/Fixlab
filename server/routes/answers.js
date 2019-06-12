const express = require('express');
const app = express();
const Answers = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

// Require Business model in our routes module
let Answer = require('../models/answer');
Answers.use(cors());


Answers.route('/add').post(function (req, res) 
{

  let newanswer = new Answer(req.body);
  newanswer.save();

});




module.exports = Answers; 
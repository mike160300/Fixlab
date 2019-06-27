const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const User = require('../models/customer')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    creation_date: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        //const hash = bcrypt.hashSync(userData.password,10)
        //userData.password=hash
        User.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.send ('User already exists')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(user => {
      if (user) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.route('/update').post(function (req, res)
{

  const id = req.body.id_user;
  User.update( req.body, 
      { where: {id_user: id} }).then(() => {
        res.json();
        res.redirect('/dashboard/profile');
        console.log(res);
      }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
      });
});

 users.route('/:id').get(function (req, res)
 {
   User.findAll({
     where: {
        id_user: req.params.id  
     }}
   )
 
     .then(uuser => {
       res.json(uuser);
     }).catch(err => {
       console.log(err);
       res.status(500).json({msg: "error", details: err});
     })
 });

 users.route('/profile/:id').get(function (req, res)
 {
   User.findOne({
     where: {
        id_user: req.params.id  
     }}
   )
 
     .then(uuser => {
       res.json(uuser);
     }).catch(err => {
       console.log(err);
       res.status(500).json({msg: "error", details: err});
     })
 });

 users.route('/:id').get(function (req, res)
 {
   User.findAll({
     where: {
        id_user: req.params.id  
     }}
   )
 
     .then(uuser => {
       res.json(uuser);
     }).catch(err => {
       console.log(err);
       res.status(500).json({msg: "error", details: err});
     })
 });

module.exports = users;

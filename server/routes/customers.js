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
        res.json({ error: 'User already exists' })
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

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})





/*
// Defined edit route 
users.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, ppost){
      res.json(ppost);
  });
});*/

//  Defined update route
/*
users.route('/update/:id_user').post(function (req, res) {
    User.findById(req.params.id_user, function(err, next, User) {
    if (!User)
      return next(new Error('Could not load Document'));
    else {
        User.description = req.body.description
        User.description = req.params.description
        User.save().then(User => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});
*/
users.route('/update/:id_user').post(function (req, res)  {

  const { id_user }= req.params;
  User.update(
      {  description : req.body.description},
      { where: { id_user: [id_user] } }
    )
     // .then(result =>
        //  res.redirect('/dashboard/profile'),
        //  console.log("user updated successfully!")
          
    //  )
      //.catch(err =>
      //    console.log("Project update failed !")
     // )
});

/*

users.route.put('/update/:id_user', function (req, res, next) {
  User.update(
    {description: req.body.description},
    {where: req.params.id_user}
  )
  .then(function(rowsUpdated) {
    res.json(rowsUpdated)
  })
  .catch(next)
 })*/

module.exports = users;

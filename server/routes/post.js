const express = require('express');
const app = express();
const posts = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')

// Require Business model in our routes module
let post = require('../models/post');
posts.use(cors())


// Defined store route
posts.route('/add').post(function (req, res) {

  let newpost = new post(req.body);
  newpost.save()

  /*const datapost = req.body;
 
 
  post.create(datapost)
  .then(post => res.redirect('/dashboard/home'))
 
  let ppost = new post(req.body);
  ppost.save()
    .then(ppost => {
      res.status(200).json({'ppost': 'post in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });*/
});

// Defined get data(index or listing) route
/*
posts.route('/').get(function (req, res) {
    psot.find(function (err, ppost){
    if(err){
      console.log(err);
    }
    else {
      res.json(ppost);
    }
  });
}); *?
// Defined edit route
posts.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  post.findById(id, function (err, ppost){
      res.json(ppost);
  });
});
/*
//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, next, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;
        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});
// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
*/
module.exports = posts; 
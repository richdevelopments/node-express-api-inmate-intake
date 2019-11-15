const express = require('express');  
const app = express();  
const inmateRoutes = express.Router();  
// Require Inmate model in the routes module  
let Inmate = require('../models/Inmate');  
// Defined store route  
inmateRoutes.route('/add').post(function (req, res) {  
  let inmate = new Inmate(req.body);  
  inmate.save()  
    .then(inmate => {  
      res.status(200).json({'Inmate': 'Inmate has been added successfully'});  
    })  
    .catch(err => {  
    res.status(400).send("unable to save to database");  
    });  
});  
// Defined get data(index or listing) route  
inmateRoutes.route('/').get(function (req, res) {  
  Inmate.find(function (err, inmates){  
    if(err){  
      console.log(err);  
    }  
    else {  
      res.json(inmates);  
    }  
  });  
});  
// Defined edit route  
inmateRoutes.route('/edit/:id').get(function (req, res) {  
  let id = req.params.id;  
  Inmate.findById(id, function (err, inmate){  
      res.json(inmate);  
  });  
});  
//  Defined update route  
inmateRoutes.route('/update/:id').post(function (req, res) {  
  Inmate.findById(req.params.id, function(err, inmate) {  
    if (!inmate)  
      res.status(404).send("Record not found");  
    else {  
      inmate.InmateName = req.body.InmateName;  
      inmate.InmateDateOfBirth = req.body.InmateDateOfBirth;    
      inmate.InmateCellNumber = req.body.InmateCellNumber;
      inmate.InmateIntakeDateTime = req.body.InmateIntakeDateTime;
      if  (inmate.InmateLocation != req.body.InmateLocation) {
           inmate.InmateLocation = req.body.InmateLocation;
           //TODO: Create Location object for Location History
      }  
      inmate.save().then(inmate => {  
          res.json('Update complete');  
      })  
      .catch(err => {  
            res.status(400).send("unable to update the database");  
      });  
    }  
  });  
});  
// Defined delete | remove | destroy route  
inmateRoutes.route('/delete/:id').get(function (req, res) {  
    Inmate.findByIdAndRemove({_id: req.params.id}, function(err, inmate){  
        if(err) res.json(err);  
        else res.json('Successfully removed');  
    });  
});  
module.exports = inmateRoutes;  
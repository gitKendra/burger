const express = require('express');

const router = express();

// Import the model to use its database functions.
const burger = require('../models/burger.js');

router.get('/', function(req, res){
	// Get burgers from database to display on page
	burger.all(function(data){
		var hbsObj = {
			burgers: data
		};
		console.log(hbsObj);
		res.render("index", hbsObj);
	});
});

router.post('/', function(req, res){
	// Create new burger
	console.log(req.body.burger);
	burger.create(req.body.burger, function(data){
		// Send back the Id of the new burger????
		res.redirect('/');
	});
});

router.put('/api/burgers/:id', function(req, res){
  burger.update(req.params.id, function(result){
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// export the router
module.exports = router;

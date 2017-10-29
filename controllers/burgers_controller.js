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
    // res.redirect("/");
  // });
});

router.put('/api/burgers/:id', function(req, res){
  // Test it
  console.log('You sent, ' + req.params.id);
  burger.update(req.params.id, function(data){
  	console.log("Called burger update");
	res.redirect('/');
  });
  // Test it
  // return res.send('You sent, ' + req.body.task);

  // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.task], function(err, result) {
  //   if (err) throw err;

  //   res.redirect("/");
  // });
});

// export the router
module.exports = router;

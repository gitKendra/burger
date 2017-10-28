// Dependencies
const express = require('express');
const burger = require('../models/burger.js');
// Create the router for app
const router = express();


router.get('/', function(req, res){

});

router.post('/', function(req, res){
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // return res.send('You sent, ' + req.body.task);

  connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.task], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

// export the router
module.exports = router;

// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
 
const app = express();
const PORT = 3000;

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(PORT);
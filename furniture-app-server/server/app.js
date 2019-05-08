var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var categoryCtrl = require('./api/category/category.controller');
var furnitureCtrl = require('./api/furniture/furniture.controller');
var app = express();
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.get('/api/category', categoryCtrl.list);
app.get('/api/category/:cat_id/furniture', furnitureCtrl.list);

// Catch all
app.use(function(req, resp) {
  resp.status(440);
  resp.send('Error File not Found');
});

// set port and start webserver
app.listen('3000', function() {
  console.log('Server running at http://localhost:3000');
});

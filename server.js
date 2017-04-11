var express = require("express");
var app = express();
var cfenv = require("cfenv");

var appEnv = cfenv.getAppEnv();
cloudantService = appEnv.getService("productDB");


/******************************
* APIs 
*******************************/

var products = require("./products");
app.get('/api/v2/products', function(req, res) {
  products.list(req,res);
});
var port = process.env.PORT || 9080;
app.listen(port, function() {
    console.log('App started on port:' + port);
});


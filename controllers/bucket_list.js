var express = require('express');
var app = express();
var bucketRouter = express.Router();

var bodyParser = require('body-parser');
bucketRouter.use(bodyParser.json());
bucketRouter.use(bodyParser.urlencoded({extended: true}));

var Country = require('../client/src/models/country');
var BucketListQuery = require('../client/db/BucketListQuery');

var query = new BucketListQuery();

bucketRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});


bucketRouter.post('/', function(req, res){

  console.log(req.body);
  var country = new Country({
    name: req.body.name
  });

  query.add(country, function(results){
    res.json(results);
  })
});

module.exports = bucketRouter;
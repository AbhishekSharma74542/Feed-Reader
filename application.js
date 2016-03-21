	var express = require('express');
	var app     = express();
	var bodyParser = require('body-parser')
	var path    = require("path");
	var rssFeed = require('C:/Users/ABHIS/Documents/RSS Feed Reader/RSSFEED.js');

	// parse application/x-www-form-urlencoded 
	app.use(bodyParser.urlencoded({ extended: false }))
	 
	// parse application/json 
	app.use(bodyParser.json())

	//Handles put requests
	// respond with html page when a GET request is made to the homepage
	app.get('/',function(req,res){
	  res.sendFile(path.join('C:/Users/ABHIS/Documents/hello'+'/index.html'));
	});
    // all the API's
	app.get('/newFeed', rssFeed.fetchFeed);
	app.put('/newFeed',rssFeed.getFeedData);
	app.post('/newFeed',rssFeed.addFeed);


	var server = app.listen(8080,function(){
	   console.log('express server listening on port ' + server.address().port);
	});
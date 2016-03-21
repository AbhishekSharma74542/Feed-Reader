	var Client = require('node-rest-client').Client;
	var Promise = require('bluebird');
	
    //Adding a default Feed	to show to the user
	var newFeed = {};
	newFeed.url = "http://cloud.feedly.com/v3/streams/contents?streamId=feed/https://www.pinterest.com/azero0/feed.rss";
	newFeed.title = "Popular Feeds"
	var allFeeds = [];
	allFeeds.push(newFeed);


    //Function to fetch list of Feed Detail's
	exports.getFeedData = function(req,res){
		console.log("coming");
		console.log(JSON.stringify(req.body.url));
		
		getAllData(req.body.url).then(function(response){
			console.log("response :: "+JSON.stringify(response));
			var newFeedObject = {};
			newFeedObject.url = req.body.url;
			newFeedObject.url = req.body.title;
			newFeedObject.response = response;
			res.send(newFeedObject);
		});	
	}
	 
	//Function to add a feed to the list of feed's
	
	exports.addFeed = function(req,res){
	console.log(JSON.stringify(req.body));	
	allFeeds.push(req.body);
	console.log(JSON.stringify(allFeeds));
	res.send("success");
	} 
    
	//Function to get a list of Feeds
	exports.fetchFeed = function(req,res){
	res.send(allFeeds);
	} 
	
	
	//Generic function to make an http request 
	var getAllData = function(url){
		return new Promise(function(resolve,reject){
		var client = new Client();
		client.get(url, function (data, response) {
		if(data.length == 0){
			console.log("Data came undefined");
			reject();
		}	
		else{
		console.log("Promise got resolved");	
		// parsed response body as js object 
		var response = data;
		resolve(response);
		}
		}); 
		});
	}

var middleware = {};
var dbSchema = require('../../database/schema'); 
var sha1 = require('sha1');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId; 

middleware.userExists = function(req, res, next){
	dbSchema.User.findOne({username: req.body.user.username}, function(err, _user) {
	    if(!err) {
	        if(!_user) {
	        	 res.send(500, "No user by that username"); 
	        }
	        else {
	           	if(sha1(req.body.user.password + _user.salt) == _user.password){
	           		next();
	           	}else{
	           		res.send(400, "Not logged in"); 
	      		}
	        }
	    }else{
	    	res.send(500, err); 
	    }
	});
}

module.exports = middleware; 
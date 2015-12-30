var userHandler = {};

var sha1 = require('sha1');
var crypto = require('crypto');
var dbSchema = require('../../database/schema');

userHandler.register = function(req, res) {
    dbSchema.User.findOne({
        username: req.body.username
    }, function(err, _user) {
        if (!err) {
            if (!_user) {
                var salt = crypto.randomBytes(20).toString('hex');
                var token = crypto.randomBytes(20).toString('hex');
                var userModel = {
                    username: req.body.username,
                    password: sha1(req.body.password + salt),
                    salt: salt,
                    token: token,
                    isVerified: false
                };

                var u = new dbSchema.User(userModel);

                u.save(function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        /*
                        mailer.sendMail(
                        	"Please verify your email with the following link: http://" + req.headers.host + "/verify/"+ userModel.username + "/" + userModel.token, 
                        	userModel.username,
                        	"Email verification, Open canvas"); 
                        */
                        res.status(200).send(userModel.username + "/" + userModel.token);
                    }
                });
            } else {
                res.status(200).send("user already exists");
            }
        }
    });
}

userHandler.registerWithoutToken = function(req, res) {
    dbSchema.User.findOne({
        username: req.body.username
    }, function(err, _user) {
        if (!err) {
            if (!_user) {
                var salt = crypto.randomBytes(20).toString('hex');
                var token = crypto.randomBytes(20).toString('hex');
                var userModel = {
                    username: req.body.username,
                    password: sha1(req.body.password + salt),
                    salt: salt
                };

                var u = new dbSchema.User(userModel);

                u.save(function(err) {
                    if (err) {
                        console.log(err);
                        res.status(500).send("Error: " + err);
                    } else {
                        res.status(200).send(userModel.username + "/" + userModel.token);
                    }
                });
            } else {
                res.status(500).send("user already exists");
            }
        }
    });
}

module.exports = userHandler;

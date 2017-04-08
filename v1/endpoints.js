var endpoints = {};
var userHandler = require('./handlers/userHandler');

var middleware = require('./middleware/middleware');
var env = require("./helpers/environment");


endpoints.ping = {
    url: '/v1/ping',
    method: 'get',
    handler: function(req, res) {
        env.getEnvironmentAsync(function(err, content) {
            res.status(200).send(content);
        });
    }
}

endpoints.register = {
    url: '/v1/user/register',
    method: 'post',
    middleware: [],
    handler: userHandler.register
}

endpoints.loginUser = {
    url: '/v1/user/login',
    method: 'post',
    middleware: [],
    handler: userHandler.login
}


module.exports = endpoints;

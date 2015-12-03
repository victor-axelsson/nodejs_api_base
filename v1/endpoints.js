var endpoints = {};
var userHandler = require('./handlers/userHandler');

var middleware = require('./middleware/middleware');
var documentation = require('./handlers/documentation');

endpoints.ping = {
    url: '/ping',
    method: 'get',
    middleware: [],
    description: "This is just a sample endpint for a ping to the endpoint.",
    expectedInput: "none",
    expectedOutput: "A text string saying pong",
    handlerName: "none",
    handler: function(req, res) {
        res.send(200, "pong");
    }
}

endpoints.documentation = {
    url: '/v1/documentation/:format',
    method: 'get',
    description: "Get the documentation for the api in the specified format. Supported formats are JSON, XML and HTML. Formats are not case sensitive.",
    middleware: [],
    expectedInput: "The format of the returned documentation. {json | html}",
    expectedOutput: "The documentation of the API in the specified format",
    handlerName: "documentation",
    handler: function(req, res) {
        documentation.getDocs(req, res, endpoints);
    }
}

endpoints.register = {
    url: '/v1/register',
    method: 'post',
    middleware: [],
    description: "Registers a new user in the api",
    expectedInput: "Object containing username and password",
    expectedOutput: "Object containing username, password and api_key",
    handlerName: "userHandler",
    handler: userHandler.registerWithoutToken
}


module.exports = endpoints;
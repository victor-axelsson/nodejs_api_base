var dbSchema = {};

var env = require('../v1/helpers/environment').getEnvironment();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/' + env.database.mongo.db_name);

var usersSchema = {
    username: {
        type: String,
        required: "usersSchema.username is required"
    },
    password: {
        type: String,
        required: "usersSchema.password is required"
    },
    salt: {
        type: String,
        required: "usersSchema.salt is required"
    },
    roles: {
        type: Array,
        default: ['review']
    }
};

dbSchema.User = mongoose.model('user', usersSchema);
module.exports = dbSchema;

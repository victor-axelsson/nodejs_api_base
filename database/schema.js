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
    profile_pic: {
        type: String,
        default: "http://s3.favim.com/orig/45/baby-cute-seal-seal-pup-smile-Favim.com-400983.jpg"
    },
    roles: {
        type: Array,
        default: ['review']
    }
};

dbSchema.User = mongoose.model('user', usersSchema);
module.exports = dbSchema;

//mongo < seed.js

var users = [{
    username: "krappen@krappen.se",
    password: "0a1e1f7e2a04309b170967d427fd240c903ba697", //cu3ik0t2x3g
    salt: "32986f5785be1e59bf9c5309d56a8eafcb94a533",
    profile_pic: "http://s3.favim.com/orig/45/baby-cute-seal-seal-pup-smile-Favim.com-400983.jpg",
    roles: ["review"],
}];

use my_database_name

var getApiKey = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

for (var i = 0; i < users.length; i++) {

    if (users[i].api_key == null) {
        users[i].api_key = getApiKey();
    }

    db.users.insert(users[i]);
}

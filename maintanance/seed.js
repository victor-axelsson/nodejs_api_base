//mongo < seed.js

var users = [{
    username: "krappen@krappen.se",
    password: "0a1e1f7e2a04309b170967d427fd240c903ba697", //cu3ik0t2x3g
    salt: "32986f5785be1e59bf9c5309d56a8eafcb94a533",
    profile_pic: "https://scontent-arn2-1.xx.fbcdn.net/hprofile-xta1/v/t1.0-1/p160x160/11221953_853647771368833_2830742537220595183_n.jpg?oh=a7aebe8f3d0e822a080b388970181fc5&oe=56BF4B18",
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

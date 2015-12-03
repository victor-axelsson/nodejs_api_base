//mongo < seed.js

var users = [{
	username: "krappen",
	password: "c7a5585d9fbb1225bce80ddf20b58e801221eb74", //asdasd
	salt: "157cc00d3729eab19fd71a2fdc07481cf1f4ff8d",
	roles: ["sudo", "review"]
}];

use example

for(var i = 0; i < users.length; i++){
	db.users.insert(users[i]); 
}
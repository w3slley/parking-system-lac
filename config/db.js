const mysql = require('mysql');
//setting db config variables

let host = 'us-cdbr-east-04.cleardb.com';
let user = 'b7440dc6fad967';
let password = 'f7ed492a';
let database = 'heroku_25c5f135f21a04a';

const connection = mysql.createConnection({host, user, password, database});
//making connection to database
connection.connect((err)=>{
	if(err) throw(err)
	console.log("MySQL database connected!");
});

module.exports = connection

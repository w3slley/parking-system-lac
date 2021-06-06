const mysql = require('mysql');
//setting db config variables

let host = 'us-cdbr-east-04.cleardb.com';
let user = 'b056b42a9aeb4d';
let password = 'fbb46108';
let database = 'heroku_606d8ff0f5fb305';

const connection = mysql.createConnection({host, user, password, database});
//making connection to database
connection.connect((err)=>{
	if(err) throw(err)
	console.log("MySQL database connected!");
});

module.exports = connection

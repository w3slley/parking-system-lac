const mysql = require('mysql');
//loading dotenv
require('dotenv').config()

//setting db config variables
let host = process.env.HOST;
let user = process.env.USERNAME;
let password = process.env.PASSWORD;
let database = process.env.DBNAME;

const connection = mysql.createConnection({host, user, password, database});
//making connection to database
connection.connect((err)=>{
	if(err) throw(err)
	console.log("MySQL database connected!");
});

module.exports = connection

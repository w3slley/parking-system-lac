const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/db.js');

//body parser middleware
app.use(bodyParser.json());

//setting static public folder
app.use(express.static('assets'));

//Handlebars middleware
const handlebars = require('express-handlebars');

//changed file extention from .handlebars to .hbs with the following config
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get('/dashboard',(req, res)=>{
	db.query('SELECT * FROM nodes', (err, data)=>{
		if(err) throw err;

		res.render('index',{nodes: data});
	});
});

app.get('/getState',(req, res)=>{
	db.query('SELECT * FROM nodes', (err, data)=>{
		if(err) throw err;

		res.send(JSON.stringify(data));
	});
});

app.post('/api/v1/updateState',(req, res)=>{
	let body = req.body;

	console.log(body);
	if(Object.keys(body).length != 4){
		res.send('{"status":"error"}\n');
	}
	else{
		db.query('SELECT * FROM nodes WHERE nodeId = ?', body.nodeId,(err, data)=>{
			if(data.length != 0){
				console.log(body.state, body.nodeId);
				db.query('UPDATE nodes SET state = ? WHERE nodeId = ?',[body.state, body.nodeId],(err, data)=>{
					if(err) throw err;

					res.send('{"status":"success"}\n');
				});
			}
			else{
				res.send('{"status":"error"}\n');
			}
		});
	}
});

app.listen(port,()=>{
	console.log(`Server listening at port ${port}`);
});
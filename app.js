const express = require('express');
const app = express();
const db = require('./config/db.js');
const port = process.env.PORT || 3000;
const http = require('http');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//body parser middleware
app.use(bodyParser.json());

//setting static folder
app.use(express.static('assets'));

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/index.html');
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
	if(Object.keys(body).length != 2 ){
		res.send('{"status":"error"}\n');
	}
	else{
		db.query('SELECT * FROM nodes WHERE nodeId = ?', body.nodeId,(err, data)=>{
			if(data.length != 0){
				db.query('UPDATE nodes SET state = ? WHERE nodeId = ?',[body.state, body.nodeId],(err, data)=>{
					if(err) throw err;
					io.emit('state update', {message:'this is a test'});
					res.send('{"status":"success"}\n');
				});
			}
			else{
				res.send('{"status":"error"}\n');
			}
		});
	}
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
	  console.log('a user disconnected');
	});
});



server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
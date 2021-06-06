const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

//body parser middleware
app.use(bodyParser.json());

app.get('/',(req, res)=>{
	res.send('test');
});
app.post('/api/v1/updateState',(req, res)=>{
	let body = req.body;
	//let latitude = parseFloat(body.latitude);

	let message;
	if(Object.keys(body).length != 4){
		message = '{"status":"error"}';
	}
	else{
		message = '{"status":"success"}';
		console.log(body);
	}
	res.send(message+'\n');
	
})

app.listen(port,()=>{
	console.log(`Server listening at port ${port}`);
})
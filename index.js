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
	console.log(body);
	res.send('{"status":"success"}\n');
})

app.listen(port,()=>{
	console.log(`Server listening at port ${port}`);
})
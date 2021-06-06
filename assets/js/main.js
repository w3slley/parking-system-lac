const socket = io();

function pullNodeState(){
	let request = $.ajax({
		url: '/getState',
		method: 'GET',
	})

	request.done((data)=>{
		data = JSON.parse(data);
		//console.log(data);
		const div = document.createElement('div');
		for(i of data){
			const p = document.createElement('p');
			p.innerHTML = 'nodeId: '+i.nodeId+' | state: '+i.state;
			div.appendChild(p);
		}
		$('#info').html(div.innerHTML);

		//setTimeout(pullNodeState(), 1000);
	});
}

socket.on('state update', function(msg) {
	console.log('db was updated ->'+msg.message);
});
//pullNodeState();
function pullNodeState(){
	let request = $.ajax({
		url: '/getState',
		method: 'GET',
	})

	request.done((data)=>{
		data = JSON.parse(data);
		//console.log(data);
		const nodes = document.createElement('div');
		nodes.classList.add('nodes');
		for(i of data){
			const node = document.createElement('div');
			node.classList.add('node');

			const led = document.createElement('div');
			led.classList.add('led');
			if(i.state == 0){
				led.style.backgroundColor = 'green';
			}
			else{
				led.style.backgroundColor = 'red';
			}
			node.appendChild(led);


			const nodeId = document.createElement('p');
			const latitude = document.createElement('p');
			const longitude = document.createElement('p');
			
			nodeId.innerHTML = 'Node ID: '+i.nodeId;
			latitude.innerHTML = 'Latitude: '+i.latitude;
			longitude.innerHTML = 'Longitude: '+i.longitude;

			node.appendChild(nodeId);
			node.appendChild(latitude);
			node.appendChild(longitude);

			nodes.appendChild(node);
		}
		$("#info").html('');
		$("#info").append(nodes);
	});
}
pullNodeState();

var socket = io();

socket.on('state update', function(msg) {
	pullNodeState();
});
fetch('mock-request.json')
	.then(res => res.json())
	.then(result => console.log(result))

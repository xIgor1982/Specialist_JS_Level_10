var onmessage = (e) => {
	console.log('Мы получили данные:', e.data)
	let a = e.data.a
	let b = e.data.b

	console.log('Перед: a =', a, ', b =', b)
	if(isNaN(a)) a = 0
	if(isNaN(b)) b = 0
	console.log('После: a =', a, ', b =', b)

	postMessage(a + b)
}
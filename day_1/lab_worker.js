var onmessage = function (e) {
	console.log('Мы получили данные:', e.data)
	let {a, b} = e.data

	console.log('Перед: a =', a, ', b =', b)
	if(a == 'NaN') a = 0
	if(b == 'NaN') b = 0
	console.log('После: a =', a, ', b =', b)

	postMessage(a + b)
}
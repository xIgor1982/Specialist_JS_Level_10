addEventListener('message', ev => {
	// console.log('addEventListener-message...')

	let tree = ev.data
	// console.log('tree', tree)

	function fn(tree) {
		let result = '<ul>'

		for (let i in tree) {
			// console.log('typeof tree[i] =', typeof tree[i] == 'string')

			if (typeof tree[i] == 'string') {
				// console.log('первый')
				result += `<li><a href='${tree[i]}'>${i}</a></li>`				
			} else {
				result += `<li>${i} ${fn(tree[i])}</li>`
			}

			// console.log('result', result)
		}

		return (result += '</ul>')
	}

	let menu = fn(tree)
	
	// console.log('--------------------------------------------------')
	// console.log('menu = ', menu)

	postMessage(menu)
})

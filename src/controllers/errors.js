



export const getErrorText = (e) => {

	if (e.name === 'SyntaxError') {
		return 'Syntax Error'
	}
	else if (e.name === 'TypeError') {
		return 'Type Error'
	}

	console.log(e.name)

	return 'Error'
}


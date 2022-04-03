

const operatorsArray = [
	'+', '-', '*', '/', '%', '√', 'ˆ'
]

const operatorsObject = operatorsArray.reduce((acc, o) => ({ ...acc, [o] : o }), {})

export const isOperator = (item) => {
	return Boolean(operatorsObject[item])
}

const isLastItemAOperator = (operation) => {

	return isOperator(
		getLastItem(operation)
	)
}

const getLastItem = (operation) => {
	return operation.slice(-1)
}





export const getNewOperation = ({ operation, item }) => {

	if (
		(
			item === '(' ||
			item === 'Ans' ||
			item === 'cos(' ||
			item === 'sin(' ||
			item === 'tan(' ||
			item === 'acos(' ||
			item === 'asin(' ||
			item === 'atan('
		)
		&&
		!isLastItemAOperator(operation)
	) {
		return `${operation}*${item}`
	}

	if (getLastItem(operation) === ')' && !operatorsArray.includes(item)) {
		return `${operation}*${item}`
	}

	return operation + item
}




export const removeLastItem = (operation) => {

	if (operation.slice(-3) === 'Ans') {
		return operation.slice(0, -3)
	}

	if (
		operation.slice(-5) === 'asin(' ||
		operation.slice(-5) === 'acos(' ||
		operation.slice(-5) === 'atan('
	) {
		return operation.slice(0, -5)
	}

	if (
		operation.slice(-4) === 'sin(' ||
		operation.slice(-4) === 'cos(' ||
		operation.slice(-4) === 'tan('
	) {
		return operation.slice(0, -4)
	}

	return operation.slice(0, -1)
}



import { isOperator } from './operations.js'

const factorial = (num) => {

	if (num > 0) {
		return num * factorial(num - 1)
	}

	return 1
}

const getBasicOperation = ({ item }) => {

	if (item === '√') {
		return { op : `Math.sqrt(`, addParentheses: true }
	}

	if (item === 'ˆ') {
		return { op : `**` }
	}

	if (item === '%') {
		return { op : `/100` }
	}

	if (item === 'π') {
		return { op : `(Math.PI)` }
	}

	if (item === 'e') {
		return { op : `(Math.E)` }
	}

	return false
}

export const getOperationResult = ({ operation, currentAnswer }) => {

	const settedOperation = (
		operation
	)
	.replaceAll(',', `.`)
	.replaceAll('Ans', `(${currentAnswer})`)
	.replaceAll(/asin|acos|atan|sin|cos|tan/ig, (key) => `Math.${key}`)

	let _operation = ''
	let addParentheses = false

	for (const item of settedOperation) {

		if (addParentheses && isOperator(item)) {
			addParentheses = false
			_operation += ')'
		}

		const isBasicOperation = getBasicOperation({ item })

		if (isBasicOperation) {
			_operation += isBasicOperation.op
			addParentheses = isBasicOperation.addParentheses
			continue
		}

		_operation += item
	}

	if (addParentheses) {
		_operation += ')'
	}

	const result = Number(eval(_operation)) || 0
	const operationResult = result

	return operationResult
}


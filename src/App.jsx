
import './App.css'

import { useState, useEffect } from 'react'

import ResultContainer from './result/Main.jsx'
import OptionsContainer from './options/Main.jsx'
import { getErrorText } from './controllers/errors.js'
import { getOperationResult } from './controllers/result.js'
import { getNewOperation, removeLastItem } from './controllers/operations.js'

function App() {

	const [ currentAnswer, setCurrentAnswer ] = useState(0)
	const [ operationResult, setOperationResult ] = useState('')
	const [ errorText, setErrorText ] = useState(null)
	const [ operation, setOperation ] = useState('')

	const saveResult = () => {
		setCurrentAnswer(operationResult)
		setOperation(operationResult.toString())
	}

	const addItem = (item) => {

		const newOperation = getNewOperation({ operation, item })

		setOperation(newOperation)
	}

	const removeLast = () => {

		const newOperation = removeLastItem(operation)

		setOperation(newOperation)
	}

	const clear = () => {
		setOperation('')
	}

	useEffect(() => {
		
		try {
			const operationResult = getOperationResult({ operation, currentAnswer })

			setOperationResult(operationResult)
			setErrorText(null)
		}catch(e) {

			const errorText = getErrorText(e)

			setErrorText(errorText)
			setOperationResult(0)
		}

	}, [operation])

	return (
		<div className="app_container">
			<div className="calculator_container">

				<ResultContainer
					operation={operation}
					errorText={errorText}
					operationResult={operationResult}
				/>

				<OptionsContainer
					addItem={addItem}
					removeLast={removeLast}
					clear={clear}
					saveResult={saveResult}
				/>

			</div>
		</div>
	)
}

export default App

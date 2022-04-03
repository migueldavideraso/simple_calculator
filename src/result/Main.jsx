

import { useRef } from 'react'
import getCaretCoordinates from 'textarea-caret'

function ResultContainer({ operation, operationResult, errorText }) {

	return (
		<section className="result_container">
			<section className="result">

				{ !errorText && operationResult.toLocaleString() }

				{ errorText && (
					<span className="error_text">{errorText}</span>
				)}

			</section>

			<section className="input" >
				{operation}
			</section>
		</section>
	)
}

export default ResultContainer

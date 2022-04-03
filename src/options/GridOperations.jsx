

import { useState } from 'react'


export default function GridOperations({ addItem, saveResult }) {

	const [ isInverted, setIsInverted ] = useState(false)

	return (

		<>
			<section className="options_grid">
				<button onClick={() => addItem('π')} className="option">π</button>
				<button onClick={() => addItem('e')} className="option">e</button>
				<button onClick={() => addItem('√')} className="option">√</button>
				<button onClick={() => addItem('ˆ')} style={{display: 'unset'}} className="option">X<sup>y</sup></button>
			</section>

			<section className="options_grid">

				{ !isInverted && <button onClick={() => addItem('sin(')} className="option">sin</button> }
				{ !isInverted && <button onClick={() => addItem('cos(')} className="option">cos</button> }
				{ !isInverted && <button onClick={() => addItem('tan(')} className="option">tan</button> }

				{ isInverted && <button onClick={() => addItem('asin(')} className="option">asin</button> }
				{ isInverted && <button onClick={() => addItem('acos(')} className="option">acos</button> }
				{ isInverted && <button onClick={() => addItem('atan(')} className="option">atan</button> }

				<button onClick={() => setIsInverted(!isInverted)} className="option active">Inv</button>

			</section>
		</>
	)
}

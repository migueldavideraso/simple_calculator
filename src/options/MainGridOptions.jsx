


export default function MainGridOptions({ addItem, saveResult }) {

	return (
		<section className="options_grid">

			<button onClick={() => addItem('(')} className="option">(</button>
			<button onClick={() => addItem(')')} className="option">)</button>
			<button onClick={() => addItem('%')} className="option">%</button>
			<button onClick={() => addItem('*')} className="option">x</button>

			<button onClick={() => addItem('7')} className="option">7</button>
			<button onClick={() => addItem('8')} className="option">8</button>
			<button onClick={() => addItem('9')} className="option">9</button>
			<button onClick={() => addItem('/')} className="option">/</button>

			<button onClick={() => addItem('4')} className="option">4</button>
			<button onClick={() => addItem('5')} className="option">5</button>
			<button onClick={() => addItem('6')} className="option">6</button>
			<button onClick={() => addItem('-')} className="option">-</button>

			<button onClick={() => addItem('1')} className="option">1</button>
			<button onClick={() => addItem('2')} className="option">2</button>
			<button onClick={() => addItem('3')} className="option">3</button>
			<button onClick={() => addItem('+')} className="option">+</button>

			<button onClick={() => addItem('Ans')} className="option">Ans</button>
			<button onClick={() => addItem('0')} className="option">0</button>
			<button onClick={() => addItem(',')} className="option">,</button>
			<button onClick={() => saveResult()} className="option active">=</button>
		</section>
	)
}


import './options.css'
import MainGridOptions from './MainGridOptions.jsx'
import GridOperations from './GridOperations.jsx'

function OptionsContainer({ addItem, removeLast, clear, saveResult }) {

	return (

		<>
			<section className="main_options">
				{/* <button className="option">History</button> */}
				<button onClick={clear} className="option">C</button>
				<button onClick={removeLast} className="option">←</button>
			</section>

			<section className="options_container">


				<MainGridOptions addItem={addItem} saveResult={saveResult} />

				<GridOperations addItem={addItem} />

			</section>
		</>
	)
}

export default OptionsContainer

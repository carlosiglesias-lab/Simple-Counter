import React, { useState, useEffect } from 'react';
import ControlledInputForm from './ControlledInputForm';

const Home = () => {
	const [time, setTime] = useState(0);
	const [paused, setPaused] = useState(0);
	const [placeholder, setPlaceholder] = useState("Enter a number to start from it")

	useEffect(() => {
		startStop();

	}, []);

	const startStop = () => {
		if (paused) {
			clearInterval(paused);
			setPaused(0);
			return;
		} else {
			//endender secuencia
			const interval = setInterval(() => {
				setTime((time) => time = time + 1);
			}, 1000);
			setPaused(interval);
		}
	}
	return (
		<div className='row text-center'>
			<div className='col-12'>
				<h1>{time}</h1>

				<button type="button" className='btn btn-primary m-3' onClick={startStop}>{paused ? "Stop" : "Start"}</button>
				<button type="button" className='btn btn-primary m-3' onClick={() => setTime(0)}>Reset</button>
			</div>
			<div className='col-12'>
				<input
					type="text"
					onKeyUp={(e) => {
						if (e.key == "Enter") {
							if (!isNaN(parseInt(e.target.value))) {
								setTime(parseInt(e.target.value));
							} else {
								e.target.value = "";
								setPlaceholder("ONLY INTEGER!");								
							}
						}
					}}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default Home;

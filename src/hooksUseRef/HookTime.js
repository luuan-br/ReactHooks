import React, { useState, useEffect, useRef } from 'react';

// import { Container } from './styles';

const HookTime = () => {
	const [time, setTime] = useState(0);
	const intervalRef = useRef();

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setTime(prevTimer => prevTimer + 1);
		}, 1000);

		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<div>
			Hook Timer - {time}
			<button onClick={() => clearInterval(intervalRef.current)}>
				Clear Hook Timer
			</button>
		</div>
	);
};

export default HookTime;

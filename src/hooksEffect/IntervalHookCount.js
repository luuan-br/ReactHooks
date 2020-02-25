import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

const IntervalHookCount = () => {
	const [count, setCount] = useState(0);

	const tick = () => {
		setCount(prevCount => prevCount + 1);
	};

	useEffect(() => {
		const interval = setInterval(tick, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div>
			<h2>Exemplo useEffect with dependency</h2>
			<p>{count}</p>
		</div>
	);
};

export default IntervalHookCount;

import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

const HookCountOne = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<h2>UseEffect after render</h2>
			<button onClick={() => setCount(count + 1)}>
				Click {count} times
			</button>
		</div>
	);
};

export default HookCountOne;

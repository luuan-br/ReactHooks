import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

const HookCountOne = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	useEffect(() => {
		console.log('useEffect - updating document title');
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<div>
			<h2>UseEffect after render</h2>
			<input
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<button onClick={() => setCount(count + 1)}>
				Click {count} times
			</button>
		</div>
	);
};

export default HookCountOne;

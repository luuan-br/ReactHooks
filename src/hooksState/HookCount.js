import React, { useState } from 'react';

// import { Container } from './styles';

const HookCount = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>Exemplo useState</h2>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	);
};

export default HookCount;

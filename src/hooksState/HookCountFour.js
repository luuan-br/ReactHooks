import React, { useState } from 'react';

// import { Container } from './styles';

const HookCountFour = () => {
	const [items, setItems] = useState([]);

	const addItem = () => {
		setItems([
			...items,
			{ id: items.length, value: Math.floor(Math.random() * 10 + 1) }
		]);
	};

	return (
		<div>
			<h2>Exemplo useState with array</h2>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	);
};

export default HookCountFour;

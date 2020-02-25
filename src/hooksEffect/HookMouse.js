import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

const HookMouse = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = e => {
		console.log('Mouse Event');
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log('useEffect calleed');
		window.addEventListener('mousemove', logMousePosition);

		return () => {
			console.log('Component unmounting code');
			window.removeEventListener('mousemove', logMousePosition);
		};
	}, []);

	return (
		<div>
			<h2>Exemplo useEffect only once</h2>
			<p>
				Hooks X - {x} Y - {y}
			</p>
		</div>
	);
};

export default HookMouse;

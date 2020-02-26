import React, { useReducer } from 'react';

const initalState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initalState;
		default:
			return state;
	}
};

const CountOne = () => {
	const [count, dispatch] = useReducer(reducer, initalState);

	return (
		<div>
			<h2>useReducer (simple state and action)</h2>
			<p>Count: {count}</p>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
		</div>
	);
};

export default CountOne;

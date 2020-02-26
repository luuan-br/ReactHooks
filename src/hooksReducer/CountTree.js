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

const CountTree = () => {
	const [count, dispatch] = useReducer(reducer, initalState);
	const [countTwo, dispatchTwo] = useReducer(reducer, initalState);

	return (
		<div>
			<h2>useReducer Multiple useReducers</h2>
			<div>
				<p>Count: {count}</p>
				<button onClick={() => dispatch('increment')}>Increment</button>
				<button onClick={() => dispatch('decrement')}>Decrement</button>
				<button onClick={() => dispatch('reset')}>Reset</button>
			</div>
			<div>
				<p>Count Two: {countTwo}</p>
				<button onClick={() => dispatchTwo('increment')}>
					Increment
				</button>
				<button onClick={() => dispatchTwo('decrement')}>
					Decrement
				</button>
				<button onClick={() => dispatchTwo('reset')}>Reset</button>
			</div>
		</div>
	);
};

export default CountTree;

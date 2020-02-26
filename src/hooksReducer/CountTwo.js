import React, { useReducer } from 'react';

const initalState = {
	firstCounter: 0,
	secondCounter: 10
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				firstCounter: state.firstCounter + action.value
			};
		case 'decrement':
			return {
				...state,
				firstCounter: state.firstCounter - action.value
			};
		case 'increment2':
			return {
				...state,
				secondCounter: state.secondCounter + action.value
			};
		case 'decrement2':
			return {
				...state,
				secondCounter: state.secondCounter - action.value
			};
		case 'reset':
			return initalState;
		default:
			return state;
	}
};

const CountTwo = () => {
	const [count, dispatch] = useReducer(reducer, initalState);

	return (
		<div>
			<h2>useReducer (complex state and action)</h2>
			<p>Count: {count.firstCounter}</p>
			<p>Second Count: {count.secondCounter}</p>
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>
				Increment 5
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
				Decrement 5
			</button>
			<div>
				<button
					onClick={() => dispatch({ type: 'increment2', value: 1 })}
				>
					Increment Counter 2
				</button>
				<button
					onClick={() => dispatch({ type: 'decrement2', value: 1 })}
				>
					Decrement Counter 2
				</button>
			</div>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
		</div>
	);
};

export default CountTwo;

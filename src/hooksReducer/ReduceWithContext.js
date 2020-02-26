import React, { useReducer } from 'react';

import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = React.createContext();

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

const ReducerWithContext = () => {
	const [count, dispatch] = useReducer(reducer, initalState);

	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div>
				<h2>useReducer with useContext</h2>
				Count: {count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
			</div>
		</CountContext.Provider>
	);
};

export default ReducerWithContext;

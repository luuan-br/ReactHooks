import React, { useEffect, useRef } from 'react';

// import { Container } from './styles';

const FocusInput = () => {
	const inputRef = useRef(null);

	useEffect(() => {
		// focus the input element
		inputRef.current.focus();
	}, []);

	return (
		<div>
			<input ref={inputRef} type='text' />
		</div>
	);
};

export default FocusInput;

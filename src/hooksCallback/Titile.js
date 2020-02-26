import React from 'react';

// import { Container } from './styles';

const Title = () => {
	console.log('Rendering Title');
	return <h2>useCallback Hook</h2>;
};

export default React.memo(Title);

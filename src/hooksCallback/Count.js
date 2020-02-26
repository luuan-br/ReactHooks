import React from 'react';

// import { Container } from './styles';

const Count = ({ text, count }) => {
	console.log(`Rendering ${text}`);
	return (
		<div>
			{text} - {count}
		</div>
	);
};

export default React.memo(Count);

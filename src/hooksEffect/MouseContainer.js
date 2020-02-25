import React, { useState } from 'react';
import HookMouse from './HookMouse';

// import { Container } from './styles';

const MouseContainer = () => {
	const [display, setDisplay] = useState(true);

	return (
		<div>
			<h2>Exemplo useEffect with cleanup</h2>
			<button onClick={() => setDisplay(!display)}>toogle display</button>
			{display && <HookMouse />}
		</div>
	);
};

export default MouseContainer;

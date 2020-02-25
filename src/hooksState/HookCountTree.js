import React, { useState } from 'react';

// import { Container } from './styles';

const HookCountTree = () => {
	const [name, setName] = useState({ fristName: '', lastName: '' });

	return (
		<div>
			<h2>Exemplo UseState with object</h2>
			<form>
				<input
					type='text'
					value={name.fristName}
					onChange={e =>
						setName({ ...name, fristName: e.target.value })
					}
				/>
				<input
					type='text'
					value={name.lastName}
					onChange={e =>
						setName({ ...name, lastName: e.target.value })
					}
				/>
			</form>
			<p>You first name is - {name.fristName}</p>
			<p>You last name is - {name.lastName}</p>
			{JSON.stringify(name)}
		</div>
	);
};

export default HookCountTree;

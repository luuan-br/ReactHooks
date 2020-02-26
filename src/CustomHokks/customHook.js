import React, { useState } from 'react';

// import { Container } from './styles';

import useInput from './hooks/useInput';

function UserForm() {
	const [lastName, bindLastName, resetLastName] = useInput('');
	const [firstName, bindFirstName, resetFirstName] = useInput('');

	const submitHandler = e => {
		e.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
		resetFirstName();
		resetLastName();
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor=''>First Name</label>
					<input value={firstName} {...bindFirstName} type='text' />
				</div>

				<div>
					<label htmlFor=''>Last Name</label>
					<input value={lastName} {...bindLastName} type='text' />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default UserForm;

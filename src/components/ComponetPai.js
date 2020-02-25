import React from 'react';

import ComponentC from './ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const ComponentPai = () => {
	return (
		<div>
			<h2>Exemplo de UserContext </h2>
			<UserContext.Provider value={'Vishwas'}>
				<ChannelContext.Provider value={'Codevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	);
};

export default ComponentPai;

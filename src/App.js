// Codevolution
import React from 'react';
import HookCount from './hooksState/HookCount';
import HookCountTwo from './hooksState/HookCountTwo';
import HookCountTree from './hooksState/HookCountTree';
import HookCountFour from './hooksState/HookCountFour';

import HookCountOne from './hooksEffect/HookCountOne';
import HookCountTwo2 from './hooksEffect/HookCountTwo';
// import HookMouse from './hooksEffect/HookMouse';
// import MouseContainer from './hooksEffect/MouseContainer';
// import IntervalHookCount from './hooksEffect/IntervalHookCount';
import DataFetching from './hooksEffect/DataFetching';

import UserContextComponents from './components/ComponetPai';
import Toolbar from './hooksContext/Toolbar';
import { ThemeContext, themes } from './hooksContext/Context';

function App() {
	return (
		<div className='App'>
			<h1>useState</h1>
			<HookCount />
			<HookCountTwo />
			<HookCountTree />
			<HookCountFour />
			<hr />
			<h1>useEffect</h1>
			<HookCountOne />
			<HookCountTwo2 />
			{/* <HookMouse /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalHookCount /> */}
			<DataFetching />
			<hr />
			<h1>useContext</h1>
			<UserContextComponents />
			<ThemeContext.Provider value={themes.dark}>
				<Toolbar />
			</ThemeContext.Provider>
			<hr />
			<h1>useReducer</h1>
		</div>
	);
}

export default App;

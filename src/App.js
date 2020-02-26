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

import HookReduceCountOne from './hooksReducer/CountOne';
import HookReduceCountTwo from './hooksReducer/CountTwo';
import HookReduceCountTree from './hooksReducer/CountTree';
import ReduceWithContext from './hooksReducer/ReduceWithContext';
import ReduceWithFetch from './hooksReducer/ReducerWithFetch';
import ReduceWithFetchTwo from './hooksReducer/ReducerWithFetchTwo';

import ParentComponent from './hooksCallback/parentComponent';

import Counter from './hooksMemo/Counter';

import FocusInput from './hooksUseRef/focusInput';
import HookTimer from './hooksUseRef/HookTime';

import DocTitleOne from './CustomHokks/DocTitleOne';
import DocTitleTwo from './CustomHokks/DocTitleTwo';
import CounterOne from './CustomHokks/CounterOne';
import CounterTwo from './CustomHokks/CounterTwo';
import CustomHook from './CustomHokks/customHook';

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
			<HookReduceCountOne />
			<HookReduceCountTwo />
			<HookReduceCountTree />
			<ReduceWithContext />
			<ReduceWithFetch />
			<ReduceWithFetchTwo />
			<hr />
			<h1>useCallback</h1>
			<ParentComponent />
			<hr />
			<h1>useMemo</h1>
			<Counter />
			<hr />
			<h1>useRef</h1>
			<FocusInput />
			<HookTimer />
			<hr />
			<h1>Custom Hooks</h1>
			<DocTitleOne />
			<DocTitleTwo />
			<CounterOne />
			<CounterTwo />
			<CustomHook />
		</div>
	);
}

export default App;

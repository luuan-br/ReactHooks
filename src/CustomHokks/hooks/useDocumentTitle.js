import { useEffect } from 'react';

// import { Container } from './styles';

const useDocumentTitle = count => {
	useEffect(() => {
		document.title = `Count ${count}`;
	}, [count]);
};

export default useDocumentTitle;

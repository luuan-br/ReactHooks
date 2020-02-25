import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { Container } from './styles';

const DataFetching = () => {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);
	const [idFromButtonClink, setIdFromButtonClink] = useState(1);

	const handleClick = () => {
		setIdFromButtonClink(id);
	};

	useEffect(() => {
		axios
			.get(
				`https://jsonplaceholder.typicode.com/posts/${idFromButtonClink}`
			)
			.then(res => {
				console.log(res);
				setPost(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [idFromButtonClink]);

	return (
		<div>
			<h2>Exemplo Fetching data with useEffect</h2>
			<input
				type='text'
				value={id}
				onChange={e => setId(e.target.value)}
			/>
			<button type='button' onClick={handleClick}>
				Fetch Post
			</button>
			<div>{post.title}</div>
			{/* <ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	);
};

export default DataFetching;

import React from "react";
import './style.css';

export function Home() {
	return (
		<div className="home">
			<a href="" target="_blank"></a>
			<h1>Home</h1>
			<section>
				<Resource
					title="Learn Vite"
					description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
					href="https://vitejs.dev"
				/>
			</section>
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" className="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

import React from "react";
import useLocation from "wouter/use-location";

export function Header() {
	const [location] = useLocation();

	return (
		<header>
			<nav>
				<a href="/" >
					Home {location === '/' ? 'active' : ''}
				</a>
				<br />
				<a href="/zustand" >
					Zustand {location === '/zustand' ? 'active' : ''}
				</a>
				<br />
				<a href="/share-state" >
					share-state {location === '/share-state' ? 'active' : ''}
				</a>
				<br />
				<a href="/flux-control" >
					flux-control {location === '/flux-control' ? 'active' : ''}
				</a>
				<br />
				<a href="/context-api" >
					context-api {location === '/context-api' ? 'active' : ''}
				</a>
				<br />
				<a href="/state/1" >
					state {location === '/state/1' ? 'active' : ''}
				</a>
				<a href="/fetch/74" >
					state {location === '/fetch/74' ? 'active' : ''}
				</a>
			</nav>
		</header>
	);
}

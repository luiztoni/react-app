import './App.css'
import { lazy , Suspense} from 'react';
import { Route, Switch } from "wouter";

import { State } from './pages/State/index.jsx';
import { ShareState } from './pages/ShareState/index.jsx';
import { FluxControl } from './pages/FluxControl/index.jsx';
import { ContextProvider } from './pages/ContextApi/ContextProvider.jsx';
import { Zustand } from './pages/Zustand/Zustand.jsx';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { FetchApi } from './pages/Fetch/index.jsx';
import { Load } from './components/Load.jsx';
const NotFound = lazy(() => import("./pages/_404.jsx"));


function App() {
	return (
		<>
		 <Suspense fallback={<Load />}>
			<Header />
			<main>
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/state/:id" component={State} />
					<Route path="/share-state" component={ShareState} />
					<Route path="/flux-control" component={FluxControl} />
					<Route path="/context-api" component={ContextProvider} />
					<Route path="/zustand" component={Zustand} />
					<Route path="/fetch/:id" component={FetchApi} />
					<Route path="/users/:id">
						{params => <NotFound />}
					</Route>
					<Route component={NotFound} />
				</Switch>
			</main>
		 </Suspense>
		</>
	);
}

export default App

import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Chat from './Components/Chat';
import Login from './Components/Login';
import Signup from './Components/Signup';
import NotFound from './Components/NotFound';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					{/* root */}
					<Route path='/' exact>
						<Redirect to='/login' />
					</Route>
					{/* chat */}
					<Route path='/chat' exact component={ Chat } />
					{/* join */}
					<Route path='/login' exact component={ Login } />
					{/* signup */}
					<Route path='/signup' exact component={ Signup } />
					{/* 42? */}
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
export default App;

// there is, one knows not what sweet mystery about this sea,
// whose gently awful stirrings seem to speak of some hidden soul beneath...
// ~ H.M.

// to absent friends
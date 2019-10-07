import React from 'react';
import './App.css';

//Pages
import {Articles} from './pages/articles'
import {ReadArticle} from './pages/readArticle'
import {CreateEditArticle} from './pages/createEditArticle'

import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
	render(){
		return (
			<BrowserRouter>
				<Route exact={true} path='/' render={() => (
					<Articles />
				)}/>
				<Route exact={true} path='/ReadArticle' component={ReadArticle} />
				<Route exact={true} path='/EditArticle' component={CreateEditArticle} />
				<Route exact={true} path='/CreateArticle' render={() => (
					<CreateEditArticle />
				)}/>
			</BrowserRouter>
		);
	}
}

export default App;

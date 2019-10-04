import React from 'react';
import './App.css';
//import {ArticlesHandler} from './serviceAPI'; //krashar vid import - förstår inte react tillräckligt

function App() {
	return (
		<div className="container">
			<div className="row">
				<h1>Articles</h1>
				<div className="articles">
					<div className="article-body">
						<h5 className="article-title">Title</h5>
						<p className="article-description">description</p>
						<div className="article-author">~author</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

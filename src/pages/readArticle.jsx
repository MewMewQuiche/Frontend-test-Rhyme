import React from "react";
//import {getArticle} from '../services/serviceAPI';
import {Link} from "react-router-dom";

export class ReadArticle extends React.Component{
	state = {
		article: {},
		url: ''
	};
		
	constructor(props) {
		super(props);

		this.state.url = 'http://ec2-34-245-55-16.eu-west-1.compute.amazonaws.com';// should be from settings		
		if(props.location !== undefined && props.location.article !== undefined && props.location.article != null){
			this.state.article = props.location.article;//bug - looses track of history and on reloads - solution redux?
		}
		else if(false){//fetch from ?articleId=dlkflkdfjglkgggkmdkfdkfkk
			//this.state.article = getArticle(this.state.url, articleId);
		}
	}

	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="card col-12">
						<div className="card-body">
							<h5 className="card-title">{this.state.article.title}</h5>
							<p className="card-text">{this.state.article.description}</p>
							<p className="card-text">{this.state.article.body}</p>
							<small className="card-text text-muted">Author: <i>{this.state.article.author}</i></small>
						</div>
					</div>
				</div>
				<div className="row">
					<button><Link to='/'>Back to articles</Link></button>
					<button>
						<Link to={{ pathname: "/EditArticle", article: this.state.article }}>Edit article</Link>
					</button>
				</div>
			</div>
		);
	}
}

import React from "react";
import {getArticles} from '../services/serviceAPI';
import {Link} from "react-router-dom";

export class Articles extends React.Component {
	state = {
		url: '',
		articles: [],
		selectedArticle: {}
	};

	constructor(props) {
		super(props);
		this.state.url = 'http://ec2-34-245-55-16.eu-west-1.compute.amazonaws.com';// should be from settings
	}

	async getArticlesWrap(){
		const response = await getArticles(this.state.url) || [];
		this.setState({ articles: response });
	}

	componentDidMount(){//Runs at start by react
		this.getArticlesWrap();
	}

	render(){
		return (
			<div className="container">
				<div className="row">
					<h1>Articles</h1>
				</div>
				<div className="row">
					{this.state.articles.map ((article) => (
						<div className="card col-12" key={article._id}>
						<Link to={{ pathname: "/ReadArticle", article: article }}>
							<div className="card-body link">
								<h5 className="card-title">{article.title}</h5>
								<p className="card-text">{article.description}</p>
								<small className="card-text text-muted">~{article.author}</small>
							</div>
							</Link>
						</div>
					))}
				</div>
				<div className="row">
					<button><Link to='CreateArticle'>Write a new article</Link></button>
				</div>
			</div>
		);
	}
}

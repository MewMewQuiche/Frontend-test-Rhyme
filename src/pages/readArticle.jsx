import React from "react";
import {Link} from "react-router-dom";

export const ReadArticle = (props) => {
	const article = props.location.article || {};//bug - looses track of history - solution redux?

	return (
		<div className="container">
			<div className="row">
				<div className="card col-12">
					<div className="card-body">
						<h5 className="card-title">{article.title}</h5>
						<p className="card-text">{article.description}</p>
						<p className="card-text">{article.body}</p>
						<small className="card-text text-muted">Author: <i>{article.author}</i></small>
					</div>
				</div>
			</div>
			<div className="row">
				<button><Link to='/'>Back to articles</Link></button>
				<button>
					<Link to={{ pathname: "/EditArticle", article: article }}>Edit article</Link>
				</button>
			</div>
		</div>
	);
};
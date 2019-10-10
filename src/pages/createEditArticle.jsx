import React from "react";
import {createArticle, updateArticle, deleteArticle} from '../services/serviceAPI';
import {Link} from "react-router-dom";

export class CreateEditArticle extends React.Component{

	state = {
		article: {},
		url: '',
		titleText: 'Write an article',
		buttons: '',
		articleBackup: {}
	};
		
	constructor(props) {
		super(props);

		this.state.url = 'http://ec2-34-245-55-16.eu-west-1.compute.amazonaws.com';// should be from settings		
		if(props.location !== undefined && props.location.article !== undefined && props.location.article !== null && props.location.article._id !== undefined){
			this.state.article = props.location.article;//bug - looses track of history and on reloads - solution redux?
			this.state.titleText = 'Edit article';
			this.state.articleBackup = this.state.article;//In case of canceling the edit then changes are discared.
		}
		else if(false){//fetch from localstorage||redux presist store
			//this.state.article = getArticle(this.state.url, articleId);
			//this.state.titleText = 'Edit article';
		}
		else{
			this.state.article = {title: '', description: '', body: '', author: ''};
		}

		this.generateButtons();
	}

	generateButtons(){
		if(this.state.article._id !== undefined && this.state.article._id !== ''){
			this.state.buttons = <div className="row">
					<button><Link to='/'>Back to articles</Link></button>
					<button onClick={this.deleteHandler}>Delete article</button>
					<button><Link to={{ pathname: "/ReadArticle", article: this.state.articleBackup }}>Cancel</Link></button>
					<button onClick={this.submitHandler}>Save</button>
				</div>;
		}
		else{
			this.state.buttons = <div className="row">
					<button><Link to='/'>Cancel</Link></button>
					<button onClick={this.submitHandler}>Save</button>
				</div>;
		}
	}

	deleteHandler = event => {
		event.preventDefault();
		if (window.confirm('Are you sure you wish to delete this article?')) {
			if(this.state.article._id !== undefined && this.state.article._id !== ''){
				deleteArticle(this.state.url, this.state.article._id);
			}
			//TODO force route back to list
		}
	}

	changeHandler = event => {
		const name = event.target.name;
		const value = event.target.value;
		
		this.setState({
			article: {
				...this.state.article,
				[name]: value
			}
		});
	}

	submitHandler = event => {//Why do changeHandler and submitHandler require = event => in order for this to be defined?
		event.preventDefault();
		let errorExists = false;
		
		if(this.state.article._id !== undefined && this.state.article._id !== ''){
			updateArticle(this.state.url, this.state.article._id, this.state.article.title, this.state.article.description, this.state.article.author, this.state.article.body);
		}
		else if(this.state.article.title !== ''){
			createArticle(this.state.url, this.state.article.title, this.state.article.description, this.state.article.author, this.state.article.body);
		}
		else{
			errorExists = true;
		}
		
		if(!errorExists){
			console.log('routes to readArticle or list now?');
		}
		else{
			console.log('some error message to user here delivered in some nice way');
		}
	}

	render(){
		return (
			<form className="container">
				<div>
					<h2>{this.state.titleText}</h2>title description body author
				</div>
				<div className="row">
					<div className="card col-12">
						<div className="card-body">
							<label className="card-title block">
								Title<br />
								<input type="text" value={this.state.article.title} onChange={this.changeHandler} name="title" />
							</label>
							<label className="card-text block">
								Description<br />
								<input type="text" value={this.state.article.description} onChange={this.changeHandler} name="description" />
							</label>
							<label className="card-text block">
								Content<br />
								<textarea value={this.state.article.body} onChange={this.changeHandler} name="body" />
							</label>
							<label className="card-text block">
								Author<br />
								<input type="text" value={this.state.article.author} onChange={this.changeHandler} name="author" />
							</label>
						</div>
					</div>
				</div>
				{this.state.buttons}
			</form>
		);
	}
}

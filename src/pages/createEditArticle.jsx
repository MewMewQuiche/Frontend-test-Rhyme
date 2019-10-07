import React from "react";
import {createArticle, updateArticle, deleteArticle} from '../services/serviceAPI';
import {Link} from "react-router-dom";

export class CreateEditArticle extends React.Component{

	state = {
		article: {},
		url: '',
		titleText: 'Write an article',
		buttons: ''
	};
		
	constructor(props) {
		super(props);

		this.state.url = 'http://ec2-34-245-55-16.eu-west-1.compute.amazonaws.com';// should be from settings		
		if(props.location !== undefined && props.location.article !== undefined && props.location.article != null){
			this.state.article = props.location.article;//bug - looses track of history - solution redux?
			this.state.titleText = 'Edit article';
		}

		this.handleSubmit = this.submit.bind(this);

		this.generateButtons();
	}

	submit(event) {//TODO
		console.log('submit');
		console.log(event);
		alert(event);
		//If Delete
		//	if(window.confirm('Are you sure you wish to delete this item?')) this.confirmedDeleteArticle()}}
		//		this.confirmedDeleteArticle();
		//		force route back to articles
		//if Save
		/*
		this.setState({
  			[author]: author
  		});
		if(this.state.article._id !== undefined && this.state.article._id !== ''){
			updateArticle(this.state.url, this.state.article._id, this.state.article.title, this.state.article.description, this.state.article.author, this.state.article.body);
		}
		else if(this.state.article.title !== ''){
			createArticle(this.state.url, this.state.article.title, this.state.article.description, this.state.article.author, this.state.article.body);
		}
		*/
		event.preventDefault();

		//TODO force route. if (article._id and (cancel || save)) then return to article, else return to articles list
	}

	confirmedDeleteArticle(){//TODO
			console.log('deleted1');
		if(this.state.article._id !== undefined && this.state.article._id !== ''){
			console.log('deleted2');
			//TODO make nicer confirm delte alart
			deleteArticle(this.state.url, this.state.article._id);
			console.log('deleted3');
			//TODO force route back to articles
		}
	}

	generateButtons(){
		if(this.state.article._id !== undefined && this.state.article._id !== ''){
			this.state.buttons = <div className="row">
					<input type="submit" value="Back to articles" />
					<input type="submit" value="Delete article" />
					<input type="submit" value="Cancel" />
					<input type="submit" value="Save" />
				</div>;
		}
		else{
			this.state.buttons = <div className="row">
					<input type="submit" value="Cancel" />
					<input type="submit" value="Save" />
				</div>;
		}
	}

	render(){
		return (
			<form className="container">
				<div>
					<h2>{this.state.titleText}</h2>
				</div>
				<div className="row">
					<div className="card col-12" onSubmit={this.submit}>
						<div className="card-body">
							<label className="card-title block">
								Title<br />
								<input type="text" value={this.state.article.title} name="title" />
							</label>
							<label className="card-text block">
								Description<br />
								<input type="text" value={this.state.article.description} name="description" />
							</label>
							<label className="card-text block">
								Content<br />
								<textarea value={this.state.article.body} name="body" />
							</label>
							<label className="card-text block">
								Author<br />
								<input type="text" value={this.state.article.author} name="author" />
							</label>
						</div>
					</div>
				</div>
				{this.state.buttons}
			</form>
		);
	}
}

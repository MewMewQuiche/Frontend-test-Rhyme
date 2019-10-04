export class ArticlesHandler {
	
	state = {
			selectedArticle,
			articles: []
	}
	
	constructor(url){
		//this.url = url;
		this.url = 'http://ec2-34-245-55-16.eu-west-1.compute.amazonaws.com';
	}

	async getArticles() {
		return fetch(this.url + '/articles')
    	.then(res => res.json())
    	.then((data) => {
      	this.setState({ articles: data })
    	  	console.log(this.state.articles)
   		})
    	.catch(console.log);
    	return this.state.articles;
 	}

	async getArticle(id){
		fetch(this.url + '/articles/' + id)
    	.then(res => res.json())
    	.then((data) => {
      	this.setState({ selectedArticle: data })
    	  	console.log(this.state.selectedArticle)
   		})
    	.catch(console.log);
    	return this.state.selectedArticle;
    }

	async createArticle(title, description, author, body){
		event.preventDefault();
        fetch(this.url + '/articles', {
        	method: 'POST',
        	headers : new Headers(),
        	body:JSON.stringify({title:title, description:description, author:author, body:body})
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
	}

	async updateArticle(id, title, description, author, body){
		event.preventDefault();
        fetch(this.url + '/articles/' + id, {
        	method: 'PUT',
        	headers : new Headers(),
        	body:JSON.stringify({_id:id, title:title, description:description, author:author, body:body})
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
	}

	async deleteArticle(id){
		event.preventDefault();
        fetch(this.url + '/articles/' + id, {
        	method: 'DELETE',
        	headers : new Headers(),
        	body:JSON.stringify({id})
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
	}
}


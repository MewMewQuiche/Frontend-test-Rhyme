export async function getArticles(url) {
	return await fetch(url + '/articles')
	   	.then(res => res.json())
   		.then((data) => {
          console.log('success articles retrieved');
          return data
		})
   		.catch((err) => console.log(err));
}

export async function getArticle(url, id){
	return await fetch(url + '/articles/' + id)
	   	.then(res => res.json())
   		.then((data) => {
          console.log('success article retrieved');
          return data
		})
   		.catch((err) => console.log(err));
}

export async function createArticle(url, title, description, author, body){ 
	fetch(url + '/articles', {
    	method: 'POST',
		headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({'title':title, 'description':description, 'author':author, 'body':body})
    }).then((res) => console.log(res))
    .then((data) => console.log('success article created'))
    .catch((err) => console.log(err))
}

export async function updateArticle(url, id, title, description, author, body){
	fetch(url + '/articles/' + id, {
    	method: 'PUT',
       	headers : {'Content-Type': 'application/json'},
       	body:JSON.stringify({'_id':id, 'title':title, 'description':description, 'author':author, 'body':body})
    }).then((res) => console.log(res))
    .then((data) => console.log('success article uppdated'))
    .catch((err) => console.log(err))
}

export async function deleteArticle(url, id){
	fetch(url + '/articles/' + id, {
       	method: 'DELETE',
       	headers : new Headers()
    }).then((res) => console.log(res))
    .then((data) => console.log('success article deleted'))
    .catch((err) => console.log(err))
}


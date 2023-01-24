const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b5e29ac37mshf7a489e86c48054p121724jsn4d0b755039da',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
export default class Requests {
	// get categories from OpenTrivia Server
	static async getCategories() {
		const URL = 'https://opentdb.com/api_category.php';
		try {
			let response = await fetch( URL );

			return await response.json();
		} catch ( err ) {
			console.log( 'API server without answer!' );
		}
	}

	static async getQuestions( number, category, difficulty, type) {
		const URL = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=${type}`;
		try {
			let response = await fetch( URL );

			return await response.json();
		} catch ( err ) {
			console.log( 'Problems retreiving data!' );
		}
	}
};
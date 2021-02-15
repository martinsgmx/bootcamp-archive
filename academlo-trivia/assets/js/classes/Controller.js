import Requests from './API.js';
import QuestionsHandler from './QuestionsHandler.js';

export default class Trivia {

	static async setCategories() {
		let categories = await Requests.getCategories();
		categories = categories.trivia_categories;
		let categories_menu = document.getElementById( 'category' );

		categories.forEach( category => {
			categories_menu.innerHTML += `
				<option value="${category.id}">${category.name}</option>
			`;
		});
	}

	static async getTriviaQuestions() {
		const n_questions = document.getElementById( 'number' ).value;
		const category = document.getElementById( 'category' ).value;
		const difficulty = document.getElementById( 'difficulty' ).value;
		const type = document.getElementById( 'type' ).value;

		return await Requests.getQuestions( n_questions, category, difficulty, type );
	}

	static async startTrivia() {
		let questions = await this.getTriviaQuestions();
		questions = questions.results;

		const correct_answers = QuestionsHandler.correctAnswers( questions );
		console.log( 'correct answers: ', correct_answers );

		QuestionsHandler.printAll( questions );

		let user_answers= [];

		const submit_btn = document.getElementById( 'get-answers' );
		if ( submit_btn ) {
			submit_btn.addEventListener( 'click', ( event ) => {
				event.preventDefault();

				let questions_cards = document.querySelectorAll( '.card-question' );
				
				for (let index = 0; index < questions_cards.length; index++) {
					const card = questions_cards[ index ];

					try {
						const answer = card.querySelector('input[type="radio"]:checked').value;
						user_answers.push( answer );
					} catch ( errr ) {
						index = questions_cards.length;
						user_answers = [];
						alert( 'Please, select all answers!' );
					}
				}

				if ( correct_answers.length === user_answers.length ) {
					const average = QuestionsHandler.getAverage( correct_answers, user_answers );
					QuestionsHandler.showAverage( average );
				}
			} );
		}
	}
};
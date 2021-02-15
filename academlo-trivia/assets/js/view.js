import Trivia from './classes/Controller.js'

// get list of all categories
Trivia.setCategories();

const formQuestions = document.getElementById( 'get-questions' );
if ( formQuestions ) {
	formQuestions.addEventListener( 'click', ( event ) => {
		event.preventDefault();

		Trivia.startTrivia();
	})
}
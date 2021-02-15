export default class QuestionsHanlder {

	static printAll( questions ) {
		const container = document.getElementById( 'main-container' );

		let html = '';
		let card_contour = '';
		let question_counter = 0;
		
		questions.forEach( question => {
			// set color contour card
			switch (question.difficulty) {
				case 'easy':
					card_contour = 'border-success';
					break;
				case 'medium':
					card_contour = 'border-warning';
					break;
				case 'hard':
					card_contour = 'border-danger';
					break;
				default:
					card_contour = 'border-primary';
					break;
			}

			let answers = question.incorrect_answers; answers.push(question.correct_answer);
			answers = this.randomAnswers( answers );

			if ( question.type === 'multiple' ) {
				html += `<div class="col-md-3 mt-2 form form-group">
										<div class="card card-question h-100 text-justify ${card_contour}">
											<p class="card-header">${question.question}</p>`;

				answers.forEach( answer => {
					html += `<div class="radio form-check mt-2 mx-2">
								<input name="questionOptions${question_counter}" class="form-check-input" type="radio" id="${answer}" value="${answer}" required>
								<label class="form-check-label" for="${answer}">${answer}</label>
							</div>`;
				});
				html += `</div></div>`;
			} else if ( question.type === 'boolean' ) {
				html += `<div class="col-md-3 mt-2 form form-group">
										<div class="card card-question h-100 text-justify ${card_contour}">
											<p class="card-header">${question.question}</p>`;

				answers.forEach( answer => {
					html += `<div class="radio form-check mt-2 mx-2">
								<input name="questionOptions${question_counter}" class="form-check-input" type="radio" id="${answer}" value="${answer}" required>
								<label class="form-check-label" for="${answer}${question_counter}">${answer}</label>
							</div>`;
				});
				html += `</div></div>`;
			}
			question_counter++;
		} );

		// push data to main container and show submit button
		container.innerHTML = html;
		const submit_btn = document.getElementById( 'get-answers' );
		submit_btn.style.cssText += 'visibility: visible';
	}

	static correctAnswers( questions ) {
		let correct_answers = [];

		questions.forEach( question => {
			correct_answers.push( question.correct_answer);
		})

		return correct_answers;
	}

	static getRandomInt( max ) {
		return Math.floor( Math.random() * Math.floor(max) );
	}

	static randomAnswers( answers ) {
		let random_order= [];

		while ( answers.length != 0 ) {
			let tmp = answers.splice( this.getRandomInt( answers.length ), 1 );
			random_order.push( tmp[0] );
		}

		return random_order;
	}

	static getAverage( correct_answers, user_answers ) {
		let correct = 0;

		for (let index = 0, length = user_answers.length; index < length; ++index ) {
			if ( user_answers[ index ] === correct_answers[ index ] ) {
				correct++;
			}
		}

		return parseInt( ( correct * 100 ) / correct_answers.length );
	}

	static showAverage( average ) {
		const submit_btn = document.getElementById( 'get-answers' );
		submit_btn.style.cssText += 'visibility: hidden';

		const container = document.getElementById('main-container');
		container.innerHTML = `<br />
					<div class="h-100 mx-auto">
					<h2 class="text-center">Average:</h2>
					<div class="c100 p${average} big center">
						<span>${average}%</span>
						<div>
							<div class="bar"></div>
							<div class="fill"></div>
						</div>
					</div>
					</div>`;
	}

}
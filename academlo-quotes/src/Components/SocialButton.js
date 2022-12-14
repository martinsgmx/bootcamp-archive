import React from 'react';

const SocialButton = ( { color, type, text='None', aux } ) => {
	const quote = text.replace(/ /g, '%20');
	let author = aux.replace(/~/g, '');

	let logo = '';
	let URL = '';

	const icon_color = {
		color: color
	}

	switch ( type.toLowerCase() ) {
		case 'twitter':
			logo = 'fab fa-twitter';
			URL = `https://twitter.com/intent/tweet?text=${ quote }%20-${ author }&via=AcademloHQ`;
			break;
		case 'wikipedia':
			author = author.replace(/ /g, '%20');
			logo = 'fab fa-wikipedia-w';
			URL = `https://en.wikipedia.org/wiki/${ author }`;
			break;
		default:
			URL = `https://en.wikipedia.org/wiki/${ author }`;
			break;
	}

	return (
		<a href={ URL } target="_blank" rel="noreferrer">
			<i class={ logo } style={ icon_color }></i>
		</a>
	)
}

export default SocialButton;
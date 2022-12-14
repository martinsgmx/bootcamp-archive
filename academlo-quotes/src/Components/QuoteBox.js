// eslint-disable-next-line
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Data from '../quotes.json'

import Text from './Text';
import RandomNumber from './RandomNumber';
import SocialButton from './SocialButton';

const colors = [
	'#09015f',
	'#af0069',
	'#55b3b1',
	'#f6c065',
	'#663f3f',
	'#007965'
]

const QuoteBox = ( ) => {
	const [quotePosition, setQuotePosition ] = useState( RandomNumber( Data.quotes.length ) );

	const handlerQuotePosition = ( ) => {
		setQuotePosition( RandomNumber( Data.quotes.length ) );
	}

	const author = '~ ' + Data.quotes[ quotePosition ].author;
	const color = colors[ RandomNumber( colors.length ) ];
	const quote = '"' + Data.quotes[ quotePosition ].quote + '"';
	
	const footer = {
		textAlign: 'right',
		padding: '2% 0',
	}

	const button_social = {
		textAlign: 'left',
		color: color,
		fontSize: '1.5rem',
		outline: 'none'
	}

	const button_next = {
		color: '#ffff',
		borderRadius: '10px',
		fontSize: '1.2rem',
		padding: '.3rem',
		backgroundColor: color,
		textAlign: 'right',
	}

	return (
		<div className="quote-box soft-padding">
			<Helmet>
				<style>
					{
						`body { background-color: ${ color }; }`
					}
				</style>
			</Helmet>
			<Text
				align='left'
				color={ color }
				size='2.5rem'
				text={ quote }
			/>
			<br />
			<Text
				align='right'
				color={ color }
				size='1.8rem'
				text={ author }
			/>
			<div style= { footer }>
				<button onClick={ handlerQuotePosition } style={ button_next }>
					Next Quote
				</button>
			</div>
			<div style={ button_social }>
				<SocialButton color={ color } type='twitter' text={ quote } aux={ author }/>
				<span>     </span>
				<SocialButton color={ color } type='wikipedia' aux={ author }/> 
			</div>
		</div>
	)
}

export default QuoteBox;
// eslint-disable-next-line
import React from 'react';

const Text = ( { align, color, size, text } ) => {
	const styles = {
		textAlign:	`${ align }`,
		color:		`${ color }`,
		fontSize:	`${ size }`
	}

	return (
		<div style={ styles }>
			{ text }
		</div>
	)
}

export default Text;
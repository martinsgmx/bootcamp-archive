import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Convertions = ( ) => {
	const [ isDegrees, setDegrees ] = useState(0);
	const [ isRadians, setRadians ] = useState(0);
	const [ isTitle, setTitle] = useState( 'Welcome to Simple Calculator!' );

	const toDegrees = ( event ) => {
		const measure = event.target.value;
		setTitle( 'Radians to Degrees!' );
		setRadians( measure );
		setDegrees( measure * 57.296 );
	}

	const toRadians = ( event ) => {
		const measure = event.target.value;
		setTitle( 'Degrees to Radians!' );
		setDegrees( measure );
		setRadians( measure * 0.01745 )
	}

	return (
		<div className="form-group col-md-8">
			{/* <h2 className="center-text">
				{ isTitle }
			</h2> */}
			{/* <br /> */}
			<Helmet>
				<title>{ isTitle }</title>
			</Helmet>
			<h1 className="App">{ isTitle }</h1>
			<div className="form-group">
				<label>
					Degrees
				</label>
				<input
					className="form-control"
					onChange={ toRadians }
					type="number"
					value={ isDegrees }
				/>
			</div>
			<br />
			<div className="form-group">
				<label>
					Radians
				</label>
				<input
					className="form-control"
					onChange={ toDegrees }
					type="number"
					value={ isRadians }
				/>
			</div>
		</div>
	)
}

export default Convertions;
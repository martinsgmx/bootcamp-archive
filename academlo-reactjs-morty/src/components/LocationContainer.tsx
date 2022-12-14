import React from 'react';

export default function LocationContainer( { name, type, dimension, residents }: any ) {
	return (
		<>
			<div className="row justify-content-center">
				<h2>{ name }</h2>
				<br />
				<h5>
					Type: <strong>{ type }</strong>
				</h5>
				<br />
				<h5>
					Dimension: <strong>{ dimension }</strong>
				</h5>
				<br />
				<h5>
					Population: <strong>{ residents.length }</strong>
				</h5>
			</div>
		</>
	)
}
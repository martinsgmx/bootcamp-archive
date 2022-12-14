import React from 'react';

export default function ( { avatar, name, status, origin, episodes }: any ) {

	return (
		<div className={ "card col-md-2 mx-2 my-2" }>
			<img
				className={ ( status === 'Dead' ) ? 'status-dead' : ''}
				src={ avatar }
				alt={ name }
				style={ { margin: '10px 0 0 0' } }
			/>
			<h6>
				<strong>{ status }</strong>
			</h6>
			<h5>
				<strong>{ name }</strong>
			</h5>
			<h6>
				No. episodes:
				<span> { episodes.length }</span>
			</h6>
			<select id="episodes" className="mx-2 my-2">
				{
					episodes.map( ( episode: string ) => {
						return <option key={ episode }>
							{ episode.replace(/https:\/\/rickandmortyapi.com\/api\/episode\//g, '') }
						</option>
					})
				}
			</select>
			<br />
			{
				( status === 'unknown') &&
				<h5 className="blink-text">
					Do have you seen it?
					<br />
					Call the <strong>Police!</strong>
				</h5>
			}
		</div>
	)
}

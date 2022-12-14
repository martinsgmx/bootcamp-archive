import React from 'react';

export default function ( { setLocation }: any ) {
	return(
		<>
			<div className={"alert-primary example-locations"} >
				<strong>Example locations: </strong>
				<span className={"example-text"} onClick={ () => setLocation( 'Citadel of Ricks' )}>
					Citadel of Ricks
				</span>
				|
				<span className={"example-text"} onClick={ () => setLocation( 'Unity\'s Planet' )}>
					Unity's Planet
				</span>
				|
				<span className={"example-text"} onClick={ () => setLocation( 'Post-Apocalyptic Earth' )}>
					Post-Apocalyptic Earth
				</span>
				|
				<span className={"example-text"} onClick={ () => setLocation( 'Earth (C-137)' )}>
					Earth (C-137)
				</span>
				|
				<span className={"example-text"} onClick={ () => setLocation( 'Anatomy Park' )}>
					Anatomy Park
				</span>
			</div>
		</>
	)
};
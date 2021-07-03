import React from "react";

import "./../Styles/TextContainer.css";

const TextContainer = ( { users } ) => (
	<div className="textContainer">
		{ users ? (
			<>
				<div className="activeContainer">
					<h5 style={ { marginLeft: 8 } }>
						{ users.map( ( { name } ) => (
							<div key={ name } className="activeItem">
								{ name }
							</div>
						))}
					</h5>
				</div>
			</>
		) : null}
	</div>
);

export default TextContainer;
import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';

import Logo from '../Media/img/academlo.png';
import { useSelector } from 'react-redux';

const Header = ( ) => {
	const { token } = useSelector( ( state) => state.main.user );

	return (
		<>
			<AppBar
				position="sticky"
			>
				<Toolbar
					variant="regular"
					>
					<img src={ Logo } alt="Academlo" height="50px" />
					{ token &&
						<Button
							type="inherit"
							href="/"
						>
							<span style={ { color: "#ffff" } }>Logout</span>
					</Button>
					}
				</Toolbar>
			</AppBar>
		</>
	)
}

export default Header;
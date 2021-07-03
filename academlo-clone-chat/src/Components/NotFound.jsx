import React from 'react';
import { Grid, Button } from '@material-ui/core';

import Header from './Auxiliaries/Header';

import './Styles/404.css';

const NotFound = () => {
	return (
		<>
			<Header />
			<Grid
				container
				direction="column"
				alignItems="center"
				justify="center"
				spacing={ 4 }
				style={ { minHeight: '100vh' } }
			>
				<div className="notfound">
					<div className="notfound">
						<Grid item>
						<div className="notfound-404">
							<h1>4<span></span>4</h1>
						</div>
						</Grid>
						<br />
						<Grid item>
							<h2>Page not found!</h2>
						</Grid>
						<br />
						<Grid item>
							<Button
								color="primary"
								variant="contained"
								href="/"
							>
								Back to login
							</Button>
						</Grid>
					</div>
				</div>
			</Grid>
		</>
	)
}

export default NotFound;
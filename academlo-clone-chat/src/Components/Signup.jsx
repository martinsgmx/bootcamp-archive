import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signupThunk } from '../Actions/MainActions';
import { useHistory } from 'react-router-dom';

import { Grid, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';

import Logo from './Media/img/logo.png';
import './Styles/Login.css';

import Header from './Auxiliaries/Header';

const Signup = () => {
	const { register, handleSubmit } = useForm();

	const history = useHistory();
	const token = useSelector( ( state ) => state.main.user?.token );

	const dispatch = useDispatch();

	useEffect( () => {
		if ( token ) {
			history.push( '/chat' );
		}
	}, [ token ] );

	const onSubmit = ( data ) => {
		console.log( data );
		dispatch( signupThunk( data ) );
	}

	return (
		<div className="bg-image">
			<Header />
			<form onSubmit={ handleSubmit( onSubmit ) }>
				<Grid
					alignItems="center"
					container
					direction="column"
					justify="center"
					spacing={ 2 }
					style={ { minHeight: "100vH" } }
				>
					<Grid item>
						<img src={ Logo } alt="Logo Academlo" height="115px" />
					</Grid>
					<h3>Create an account</h3>
					<Grid item>
						<TextField
							color="primary"
							id="username"
							label="Username"
							name="username"
							type="text"
							inputRef={ register }
							required
							variant="standard"
						/>
					</Grid>
					<Grid item>
						<TextField
							color="primary"
							id="email"
							label="Email"
							name="email"
							type="email"
							inputRef={ register }
							required
							variant="standard"
						/>
					</Grid>
					<Grid item>
						<TextField
							color="primary"
							id="password"
							label="Password"
							name="password"
							type="password"
							inputRef={ register }
							required
							variant="standard"
						/>
					</Grid>
					<Grid item>
						<TextField
							color="primary"
							id="room"
							label="Room"
							name="room"
							type="text"
							inputRef={ register }
							required
							variant="standard"
						/>
					</Grid>
					<Grid item>
						<FormControlLabel
							value="accept"
							control={ <Checkbox color="primary" /> }
							label="Terms and conditions"
							labelPlacement="end"
							required
						/>
					</Grid>
					<Grid item>
						<Button
							color="primary"
							variant="contained"
							type="submit"
							size="medium"
						>
							Signup
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	)
}

export default Signup;
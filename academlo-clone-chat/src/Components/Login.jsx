import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { loginThunk } from '../Actions/MainActions';

import { Grid, TextField, Button } from '@material-ui/core';

import './Styles/Login.css';
import Logo from './Media/img/logo.png';

import Header from './Auxiliaries/Header';

const Login = () => {
	const { register, handleSubmit } = useForm();

	const history = useHistory();
	const access = useSelector( ( state ) => state.main.access );

	const dispatch = useDispatch();

	useEffect( () => {
		if ( access ) {
			history.push( '/chat' );
		}
	}, [ access, history ] );

	const onSubmit = ( data ) => {
		dispatch( loginThunk( data ) );
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
						<img src={ Logo } alt="Logo Academlo" height="125px" />
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
						<Button
							color="primary"
							variant="contained"
							type="submit"
							size="medium"
						>
							Submit
						</Button>
					</Grid>
					<Grid item>
						<Link
							to="/signup"
						>
							Create an account
						</Link>
					</Grid>
			</Grid>
			</form>
		</div>
	)
}

export default Login;
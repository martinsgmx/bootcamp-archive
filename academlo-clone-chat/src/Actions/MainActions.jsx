import axios from 'axios';

export const MainActionTypes = {
	login: 'LOGIN',
	loginFailed: 'LOGIN_FAILED',
	loginSuccess: 'LOGIN_SUCCESSS',
	signup: 'SIGNUP',
	signupFailed: 'SIGNUP_FAILED',
	signupSuccess: 'SIGNUP_SUCCESS',
};

//	LOGIN actions-----------------------------------
export const login = ( room ) => ( {
	type: MainActionTypes.login,
	payload: room
} );

export const loginFailed = ( error ) => ( {
	type: MainActionTypes.loginFailed,
	payload: error
} );

export const loginSuccess = ( auth ) => ( {
	type: MainActionTypes.loginSuccess,
	payload: auth
} );

export const loginThunk = ( loginData ) => {
	const { email, password, room } = loginData;

	return ( dispatch ) => {
		dispatch( login( room ) );

		return axios
			.post( import.meta.env.VITE_APP_LOGIN_EP, {
				email,
				password
			} )
			.then( ( response ) => dispatch( loginSuccess( response.data ) ) )
			.catch( ( error ) => dispatch( loginFailed( error ) ) );
	};
};

//	SIGNUP actions----------------------------------
export const signup = ( room ) => ( {
	type: MainActionTypes.signup,
	payload: room
} );

export const signupFailed = ( error ) => ( {
	type: MainActionTypes.signupFailed,
	payload: error
} );

export const signupSuccess = ( auth ) => ( {
	type: MainActionTypes.signupSuccess,
	payload: auth
} );

export const signupThunk = ( signupData ) => {
	const { email, username, password, room } = signupData;

	return ( dispatch ) => {
		dispatch( signup( room ) );

		return axios
			.post( import.meta.env.VITE_APP_SIGNUP_EP, {
				email,
				username,
				password
			} )
			.then ( ( response ) => dispatch( signupSuccess( response ) ) )
			.catch( ( error ) => signupFailed( error ) );
	};
};
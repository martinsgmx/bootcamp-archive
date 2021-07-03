import { MainActionTypes } from '../Actions/MainActions';

const INITIAL_SATATE = {
	message: new Array(),
	isLoading: false,
	user: {
		id: '',
		username: '',
		token: ''
	},
	access: false,
	roomJoin: null
};

export default ( state= INITIAL_SATATE, action ) => {
	switch ( action.type ) {
		case MainActionTypes.login:
			return {
				...state,
				isLoading: true,
				roomJoin: action.payload
			};

		case MainActionTypes.loginFailed:
			return {
				...state,
				isLoading: false,
				access: false
			};

		case MainActionTypes.loginSuccess:
			return {
				...state,
				user: action.payload.user,
				access: action.payload.access,
				isLoading: false
			};

		default:
			return state;
	};
};
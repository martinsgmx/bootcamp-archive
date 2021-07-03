import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';

import Header from './Auxiliaries/Header';
import Messages from './Auxiliaries/Messages';
import Input from './Auxiliaries/Input';
import TextContainer from './Auxiliaries/TextContainer';

import './Styles/Chat.css';
import { Grid, List } from '@material-ui/core';
import OnlineUsers from './Auxiliaries/OnlineUsers';

let socket;

const Chat = () => {
	const [ users, setUsers ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ messages, setMessages ] = useState( [] );

	const { username, token } = useSelector( ( state ) => state.main.user );
	const room = useSelector( ( state ) => state.main.roomJoin );

	useEffect( () => {
		if ( token && username ) {
			socket = io( import.meta.env.VITE_APP_EP, {
				query: {
					token
				}
			} );

			socket.on( 'error', ( error ) => alert( 'Error at connection!\n', error ) );

			socket.emit( 'join', { name: username, room }, ( error ) => {
				if ( error ) {
					alert( 'Error!' );
				}
			} );

			socket.on( 'message', ( message ) => {
				setMessages( ( messages ) => [...messages, message ] );
			} );

			socket.on( 'roomData', ( { users } ) => {
				setUsers( users );
			} );
		}
	}, [ token, room, username ] );

	const sendMessage = ( event ) => {
		event.preventDefault();
		
		if ( message ) {
			socket.emit( 'sendMessage', message, () => setMessage('') );
		}
	}

	return (
		<>
		<Header />
		<Grid
			container
			spacing={ 1 }
		>
			<Grid item xs={ 1 }>
				<h2>Users</h2>
				<OnlineUsers users={ users } />
			</Grid>
			<Grid item xs={ 11 }>
				<h2>Chat</h2>
				<Messages messages={ messages } name={ username } />
			</Grid>
		</Grid>
		<Grid
			container
			justify="center"
			alignItems="center"
		>
			<Grid item xs={ 10 }>
				<Input
					message={ message }
					setMessage={ setMessage }
					sendMessage={ sendMessage }
				>
				</Input>

			</Grid>
		</Grid>
		</>
		// <div className="grid">
		// 	<Header room={ room } username={ username } />
		// 	<div className="container">
		// 		<Messages messages={ messages } name={ username } />
		// 	</div>
		// 	<Input
		// 		message={ message }
		// 		setMessage={ setMessage }
		// 		sendMessage={ sendMessage }
		// 	/>
		// 	<TextContainer users={ users } />
		// </div>
	)
}

export default Chat;
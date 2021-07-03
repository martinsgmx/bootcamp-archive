import React from 'react';
import { Button, TextField } from '@material-ui/core';

import './../Styles/Input.css';

const Input = ( { setMessage, sendMessage, message } ) => (
	<form className="form">
		{/* <input
			className="input"
			type="text"
			placeholder="Type a message..."
			value={ message }
			onChange={ ( { target: { value } } ) => setMessage( value ) }
			onKeyPress={ ( event ) => event.key === 'Enter' ? sendMessage( event ) : null}
		/> */}
		<TextField
			className="input"
			type="text"
			placeholder="Type a message..."
			value={ message }
			onChange={ ( { target: { value } } ) => setMessage( value ) }
			onKeyPress={ ( event ) => event.key === 'Enter' ? sendMessage( event ) : null}
			multiline
			label="Message"
			rowsMax={ 1 }
		/>
		<Button
			variant="contained"
			color="primary"
			className="sendButton"
			onClick={ e => sendMessage( e ) } >
			Send
		</Button>
	</form>
)

export default Input;
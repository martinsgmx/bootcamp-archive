import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { List, ListItem } from '@material-ui/core';

import Message from './Message';

import '../Styles/Messages.css';

const Messages = ( { messages, name } ) => {
	return (
	<ScrollToBottom className="messages">
		<List>
			{
				messages.map( ( message, i) => (
					<ListItem key={ i }>
						<Message message={ message } name={ name } />
					</ListItem>
				))
			}
		</List>
		{/* { messages.map(
			( message, i ) => <div key={ i }><Message message={ message } name={ name }/></div>
			) } */}
	</ScrollToBottom>
	)
}

export default Messages;
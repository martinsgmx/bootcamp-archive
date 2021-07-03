import { List, ListItem } from '@material-ui/core';
import React from 'react';
import UserAvatar from './UserAvatar';

const OnlineUsers = ( { users } ) => {

	return (
		<>
			<List>
				{ users ? users.map( ( user ) => (
					<ListItem key={ user.name } >
						<UserAvatar name={ user.name } />
					</ListItem>
				) ) : null }
			</List>
		</>
	)
}


export default OnlineUsers;
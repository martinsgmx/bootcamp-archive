import React from 'react';
import { Avatar } from '@material-ui/core';

const UserAvatar = ( { name } ) => {

	return (
		<>
		<Avatar alt={ name }>{ name.charAt(0).toUpperCase() }</Avatar>
		</>
	)
}

export default UserAvatar;
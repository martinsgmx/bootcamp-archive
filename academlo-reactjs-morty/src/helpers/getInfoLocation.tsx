import React from 'react';
import axios from 'axios';

export default async function ( ID: number ) {
	return await axios.get( `${ import.meta.env.VITE_RM_LOCATION }${ ID }` );
}
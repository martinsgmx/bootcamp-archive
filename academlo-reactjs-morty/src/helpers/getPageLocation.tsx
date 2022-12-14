import React from 'react';
import axios from 'axios';

export default async function ( PAGE: number ) {
	return await axios.get( `${ import.meta.env.VITE_RM_PAGE }${ PAGE }` );
}
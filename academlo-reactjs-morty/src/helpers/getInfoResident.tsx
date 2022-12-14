import React from 'react';
import axios from 'axios';

export default async function ( URL: string ) {
	return await axios.get( URL );
}
import React from 'react';

export default function ( LIMIT: number ) {
	return Math.floor(Math.random() * Math.floor( LIMIT ));
}
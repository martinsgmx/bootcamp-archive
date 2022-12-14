import React from 'react';
import getPageLocation from "./getPageLocation";

export default async function ( ) {
	let pages: number = 0, res: any = [];

	await getPageLocation( 1 )
		.then( ( response: any ) => {
			pages = response.data.info.pages;
		} );

	for (let page = 1; page <= pages; page++) {
		await getPageLocation( page )
			.then( ( response: any ) => {
				response.data.results.map( ( location: any ) => {
					res.push( { 'id': location.id, 'name': location.name } );
				})
			})
	}

	return res;
}
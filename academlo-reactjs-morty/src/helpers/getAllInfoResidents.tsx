import React from 'react';
import getInfoResident from "./getInfoResident";

export default async function ( residents: any ) {
	let res: any = [];

	residents.map( async ( resident: any ) => {
		await getInfoResident( resident )
			.then( ( response ) => {
				res.push( response.data );
			})
	});

	return res;
}
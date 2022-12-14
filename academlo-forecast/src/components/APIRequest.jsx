import React from 'react';

const GetCurrentWeather = async ( lat, lon ) => {
	const API_KEY = import.meta.env.VITE_ACCU_KEY;
	const URL = `https://api.weatherapi.com/v1/current.json?key=${ API_KEY }&q=${ lat },${ lon }`;

	const response = await fetch( URL, {
		method: 'GET',
	} );

	return await response.json();
};

export default GetCurrentWeather;

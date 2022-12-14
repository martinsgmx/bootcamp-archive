import React from 'react';
import './weather-icons.min.css';

const icons = {
	'Sunny':	'wi-day-sunny',
	'Clear':	'wi-day-sunny',
	'Cloudy':	'wi-day-cloudy',
	'Partly cloudy':	'wi-day-cloudy',
	'Rain':	'wi-rain',
	'Fog':	'wi-fog',
	'Light snow':	'wi-snow',
	'Overcast':	'wi-cloudy',
	'Overcast':	'wi-day-sunny-overcast',
	'na':	'wi-na'
}

const Icon = ( { weather, size } ) => {
	const styles = {
		fontSize: size
	}

	const classes = `wi ${ icons[ `${ weather }` ] ?? icons[ 'na' ] }`;

	return (
		<i style={ styles } className={ classes } ></i>
	)
}



export default Icon;

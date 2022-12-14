import React, { useState, useEffect } from 'react';

import GetCurrentWeather from './APIRequest';
import Icon from './Icon';

import '../App.css';
import './weather-icons.min.css';

const WeatherWidget = () => {
	const [currentWeather, setCurrentWeather]		=	useState( {} );
	const [currentLocation, setCurrentLocation]	=	useState( {} );

	const [userLocation, setUserLocation]				= useState( {} );

	const [updateInfo, setUpdateInfo]			=	useState( false );
	const [metricSystem, setMetricSystem]	=	useState( true );

	const handlerInfo = ( ) => {
		setUpdateInfo( !updateInfo );
	}

	const handlerMetricSystem = ( ) => {
		setMetricSystem( !metricSystem );
	}

	useEffect( () => {
		navigator.geolocation.getCurrentPosition( ( setUserLocation ) );
	} ), [ updateInfo ] ;

	let lat = 0;
	let lon = 0;
	try {
		lat = userLocation.coords.latitude;
		lon = userLocation.coords.longitude;

	} catch {
		lat = '55.676111';
		lon = '12.568333';
	}

	useEffect( () => {
		GetCurrentWeather( lat , lon ).then( ( response ) => {
			setCurrentWeather( response.current );
			setCurrentLocation( response.location );
		} )
	}, [ lat, lon ] );

	let weather = '';
	try {
		weather = currentWeather.condition.text;
	} catch ( e ) {
		weather = 'loading...'
	};

	return (
		<div className="box text-white">
			<Icon weather={ weather } size='4rem'/>
			<h1>{
				( metricSystem ) ?
					`${ currentWeather.temp_c } °C` :
					`${ currentWeather.temp_f } °F` }
			</h1>
			<h2>{ currentLocation.name } | { currentLocation.region } | { currentLocation.country }</h2>
			<h2>{ weather }</h2>
			<h3>
				<i className="wi wi-windy"></i><span> </span>
				Wind speed: {
					( metricSystem ) ?
						`${ currentWeather.wind_kph } kph` :
						`${ currentWeather.wind_mph } mph` }
			</h3>
			<h3>
				<i className="wi wi-barometer"></i><span> </span>
				Pressure: {
					( metricSystem ) ?
						`${ currentWeather.pressure_mb } mb` :
						`${ currentWeather.pressure_in } in` }
			</h3>
			<h3>
				<i className="wi wi-cloud-up"></i><span> </span>
				Clouds: {	currentWeather.cloud }%
			</h3>

			<button onClick={ handlerInfo }>
				<i className='wi wi-refresh'></i>
			</button>
			<button onClick={ handlerMetricSystem }>
				Change metric system
			</button>
		</div>
	)
}

export default WeatherWidget;

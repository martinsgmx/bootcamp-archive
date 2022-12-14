import React, {useEffect, useState} from 'react';
import './App.scss';

import ExampleLocations from "./components/ExampleLocations";
import Title from './components/Title';
import SearchBar from "./components/SearchBar";
import LocationContainer from "./components/LocationContainer";
import LoadingAnimation from "./components/LoadingAnimation";
import ResidentContainer from "./components/ResidentContainer";

import getAllLocations from "./helpers/getAllLocations";
import getInfoLocation from "./helpers/getInfoLocation";
import getInfoResident from "./helpers/getInfoResident";
import randomNumber from "./helpers/randomNumber";
import Footer from "./components/Footer";


const App = () => {
	const [locations, setLocations]: any = useState( new Array() );

	const [actualID, setActualID]: any = useState( randomNumber( 108 ) );
	const [dataLocation, setDataLocation]: any = useState( new Array() );
	const [dataResidents, setDataResidents]: any = useState( new Array() );

	const [searchText, setSearchText]: any = useState( '' );
	const [buttonStatus, setButtonStatus]: any = useState( false );

	const [residentsIsReady, setResidentsIsReady] = useState( false );

	// get all locations and id's
	useEffect( () => {
		const getAll = async () => {
			await getAllLocations()
				.then( ( res ) => {
					setLocations( [...res] );
				})
		}

		getAll();
	}, [ ] );

	// validate location
	useEffect( () => {
		setDataLocation( [] );

		const findLocationByName = ( search: string, callback: any ) => {
			const location = locations.find( ( { name }: any ) => name.toLowerCase() === search.trim().toLowerCase() );

			if ( location ) {
				return callback( null, location.id );
			} else {
				return callback( true, null );
			}
		}

		findLocationByName( searchText, ( err: any, location: number) => {
			if ( err ) {
				return setActualID( actualID );
			}

			setActualID( location );
		} );

	}, [ buttonStatus ] );

	// get all data from specific id location
	useEffect( () => {
		const getData = async ( ID: number ) => {
			await getInfoLocation( ID )
				.then( ( res ) => {
					setDataLocation( res.data );
				})
		}

		getData( actualID );
	}, [ actualID ] );

	// get and set residents info from id location
	useEffect(  () => {
		setResidentsIsReady( false );

		let aux: any = [];
		let final: any = [];

		const getInfo = async () => {

			if ( dataLocation.residents ) {
				const data = dataLocation.residents.slice(0, 10);

				// @ts-ignore
				const promises = data.map( ( url: string ) =>
					getInfoResident.bind( this, url ) );

				await Promise.all( promises.map( ( f: any ) => f( ) ) )
					.then( ( response ) => aux = response )

				aux.map( ( resident: any ) => {
					final.push( resident.data );
				})

				setDataResidents( final );
				setResidentsIsReady( true );
			}
		}

		getInfo();
	}, [ dataLocation ] );

	return (
		<div className={"app"}>
			{/* header wave */}
			<Title />
			{/* example container */}
			<div className={"container"}>
				<div className={"row justify-content-center"}>
					<div className={"col-sm-10"}>
						<ExampleLocations setLocation={ setSearchText }/>
					</div>
				</div>
			</div>
			{/* search bar container */}
			<div className={"container-fluid mt-3"}>
				<SearchBar
					buttonHandler={ setButtonStatus }
					inputHandler={ setSearchText }
					searchText={ searchText }
				/>
			</div>
			{/* main containers */}
			<div className="container mt-3">
				{
					( dataLocation.residents )
					&&
					<LocationContainer
							name={ dataLocation.name }
							type={ dataLocation.type }
							dimension={ dataLocation.dimension }
							residents={ dataLocation.residents }
					/>
				}
			</div>
			<div className="container">
				{
					( residentsIsReady && dataResidents )
						?
						<ResidentContainer
							residents={ dataResidents }
						/>
						:
						<LoadingAnimation />
				}
			</div>
			{/* footer */}
			<Footer />
		</div>
	)
};

export default App;

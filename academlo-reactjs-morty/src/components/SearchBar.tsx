import React from 'react';

function SearchBar( { buttonHandler,  inputHandler, searchText }: any ) {
	return(
		<>
			<input
				id={"search-box"}
				placeholder={"Search an location..."}
				type={"text"}
				value={ searchText }
				onChange={ ( e ) => inputHandler( e.target.value ) }
			/>
			<span style={ { padding: '0 10px 0 0' } }/>
			<button
				className={"btn btn-outline-primary"}
				onClick={ () => buttonHandler( ( prev: boolean ) => !prev ) }
			>
				Search
			</button>
		</>
	)
};

export default SearchBar;
import React from 'react';
import WaveHeader from "./WaveHeader";

export default function () {
	return (
		<>
			<div className={"container-fluid p-0"} >
				<WaveHeader/>
			</div>
			<div className={"title-container my-3"}>
				<h1 className={"title"}>
					{
						import.meta.env.VITE_MAIN_TITLE
					}
				</h1>
				<h3 className={"subtitle"}>
					- Universe Explorer -
				</h3>
			</div>
		</>
	)
}

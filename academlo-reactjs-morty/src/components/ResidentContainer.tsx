import React, {useEffect, useState} from 'react';
import getAllInfoResidents from "../helpers/getAllInfoResidents";
import ResidentInfo from "./ResidentInfo";

export default function ResidentContainer( { residents }: any ) {

	return (
		<>
			<div className="row justify-content-center">
				{ residents.map( ( resident: any ) => {
					return <ResidentInfo
						key={ resident.name }
						avatar={ resident.image }
						name={ resident.name }
						status={ resident.status }
						origin={ resident.origin.name }
						episodes={ resident.episode }
					/>
					} )
				}
			</div>
		</>
	)
}
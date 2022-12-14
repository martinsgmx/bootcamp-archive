import React from 'react';

import Background from '../media/background.png';

function WaveHeader() {
	return(
		<>
			<svg height="100%" width="100%" viewBox="0 0 1440 110" xmlns="http://www.w3.org/2000/svg" >
				<defs>
					<pattern id="image" x="0" y="0" width="1" height="1" viewBox="0 0 2048 339" preserveAspectRatio="xMidYMid slice">
						<image xlinkHref={ Background } />
					</pattern>
				</defs>
				<path
					d="M-210, 50 C180, 190 1350, 0 1440, 80 L1450, 0 L0, 0 Z" fill="url(#image)" transform="rotate(0 720 300)"/>
			</svg>
		</>
	)
};

export default WaveHeader;
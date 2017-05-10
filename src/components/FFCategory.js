// import React, { Component } from 'react';

// export default class FFCategory extends Component {
	
// 	render(match) {
// 		return (
// 			<div>{match.params.category}</div>
// 		)
// 	}
// }

import React from 'react';

export const FFCategory = ({ match }) => {
	<div>
		<h3>{match.params.category}</h3>
	</div>
}
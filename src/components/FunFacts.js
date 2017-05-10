import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FunFacts extends Component {
	render() {
		return (
			<div>
				<h1>Fun Facts about Colin</h1>
				<Link to="/funfacts/stuff">Stuff</Link>
				<Link to="/funfacts/soccer">Soccer</Link>
			</div>
		)
	}
}

// export const FunFacts = ({ match }) => {
// 	<div>
// 		<h1>Fun Facts about Colin</h1>
// 		<Link to="/funfacts/stuff">Stuff</Link>
// 		<Link to="/funfacts/soccer">Soccer</Link>
// 	</div>
// }
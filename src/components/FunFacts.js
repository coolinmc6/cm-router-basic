import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FFCategory from './FFCategory';


// const FFCategory = ({ match }) => (
//   <div>
//     <h3>{match.params.category}</h3>
//   </div>
// )

export default class FunFacts extends Component {
	constructor() {
		super();

	}


	render() {
		return (
			<div>
				<h1>Fun Facts about Colin</h1>
				<Link to="/funfacts/stuff">Stuff</Link>
				<Link to="/funfacts/soccer">Soccer</Link>
				<Route path={`${this.props.match.url}/:category`} component={FFCategory}/>
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
import React, { Component } from 'react';

export default class FFCategory extends Component {
	constructor() {
		super();
		this.state = {
			soccer: ["soccer 1", "soccer 2"],
			stuff: ["stuff 1", "stuff 2"],
			text: []

		}
	}
	componentDidMount() {
		if(this.props.match.params.category === "soccer") {
			this.setState({ text: this.state.soccer}) 
		} else {
			this.setState({ text: this.state.stuff}) 
		}
	}
	render() {
		return (
			<div>
				<h4>{this.props.match.params.category}</h4>
				<p>{this.state.text.map((item) => {
					return <p>{item}</p>
				})}</p>
			</div>
		)
	}
}

// import React from 'react';

// export const FFCategory = ({ match }) => {
// 	<div>
// 		<h3>{match.params.category}</h3>
// 	</div>
// }
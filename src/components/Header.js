import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<Link className="nav-link" to="/">Home</Link>
				<Link className="nav-link" to="/about">About</Link>
				<Link className="nav-link" to="/funfacts">FunFacts</Link>
				<Link className="nav-link" to="/contact">Contact</Link>
			</div>
		)
	}
}
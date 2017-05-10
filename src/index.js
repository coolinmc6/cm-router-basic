import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import FunFacts from './components/FunFacts';
import Home from './components/Home';
import Contact from './components/Contact';
import FFCategory from './components/FFCategory';
import './index.css';

ReactDOM.render(
	<Router>
		<div>
	  		<Route path="/" component={App} />
	  		<Route exact path="/" component={Home} />
	  		<Route path="/about" component={About} />
	  		<Route path="/funfacts" component={FunFacts}>
	  			<Route path="/funfacts/:category" component={FFCategory} />
	  		</Route>
	  		<Route path="/contact" component={Contact} />
  		</div>
	</Router>,
  document.getElementById('root')
);

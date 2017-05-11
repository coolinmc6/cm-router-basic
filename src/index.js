import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import FunFacts from './components/FunFacts';
import Home from './components/Home';
import Contact from './components/Contact';
import FFCategory from './components/FFCategory';
import Topics from './components/Topics';
import Clones from './components/Clones';
import './index.css';

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

ReactDOM.render(
	<Router>
		<div>
	  		<Route path="/" component={App} />
	  		<Route exact path="/" component={Home} />
	  		<Route path="/about" component={About} />
	  		<Route path="/funfacts" component={FunFacts}/>
	  		
	  		<Route path="/topics" component={Topics} />
	  		<Route path="/clones" component={Clones} />
	  		<Route path="/contact" component={Contact} />
  		</div>
	</Router>,
  document.getElementById('root')
);

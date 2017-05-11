import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import Topic from './Topic';

const Clone = ({ match }) => (
  <div>
    <h3>{match.params.cloneId}</h3>
  </div>
)

class Clones extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="main">
        <h2>Clones</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:cloneId`} component={Clone}/>
        <Route exact path={this.props.match.url} render={() => (
          <h3>Please select a Clone.</h3>
        )}/>

        
      </div>
    )
  }
}
// const Clones = ({ match }) => (
//   <div>
//   	<h2>Clones</h2>
//   	<ul>
//   	  <li>
//   	    <Link to={`${match.url}/rendering`}>
//   	      Rendering with React
//   	    </Link>
//   	  </li>
//   	  <li>
//   	    <Link to={`${match.url}/components`}>
//   	      Components
//   	    </Link>
//   	  </li>
//   	  <li>
//   	    <Link to={`${match.url}/props-v-state`}>
//   	      Props v. State
//   	    </Link>
//   	  </li>
//   	</ul>

//   	<Route path={`${match.url}/:cloneId`} component={Clone}/>
//   	<Route exact path={match.url} render={() => (
//   	  <h3>Please select a Clone.</h3>
//   	)}/>
//   </div>
// )

export default Clones;
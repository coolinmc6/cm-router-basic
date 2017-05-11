import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
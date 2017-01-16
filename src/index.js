//React stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
//custom modules
import App from './App';
//custom CSS
import './index.css';
import SingleMovie from './SingleMovie';
import Home from './home';

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute path={Home} />
  		<Route path="movie/:id" component={SingleMovie} />
  	</Route>
  </Router>,
  document.getElementById('root')
);

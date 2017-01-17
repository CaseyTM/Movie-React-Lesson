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
import SearchResults from './SearchResults'

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  		<IndexRoute component={Home} />
  		<Route path="movie/:id" component={SingleMovie} />
  		
  		<Route path="search/:movieToSearchFor" component={SearchResults} />
  	</Route>
  </Router>,
  document.getElementById('root')
);

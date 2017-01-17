import React, { Component } from 'react';
import { Link } from 'react-router';
import Constants from './Constants';
class SearchResults extends Component{
	render(){
		var imagePath= Constants.imageBase;
		var posterLink='/movie/';
		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<Link to={posterLink}><img src={imagePath} /></Link>
			</div>
		)
	}
}

export default SearchResults;
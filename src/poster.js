import React, { Component } from 'react';

class Poster extends Component{
	render(){
		var imagePath='http://image.tmdb.org/t/p/w300' + this.props.poster.poster_path
		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<img src={imagePath} />
			</div>
		)
	}
}

export default Poster;
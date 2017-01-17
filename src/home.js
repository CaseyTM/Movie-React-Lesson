import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Poster from './poster';
import Constants from './Constants'
import config from './config';
import DiscoverButton from './DiscoverButton';

class Home extends Component{
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.state = {
			moviePosters: []
		}
		
	}
	  componentDidMount() {

    var url = Constants.baseUrl + Constants.nowPlayingEP + config.api_key;
    $.getJSON(url, (movieData)=>{
      this.setState({
        moviePosters: movieData.results
      })
    })
    
  }

  	handleCategoryChange(categoryApiUrl){
  		var url = Constants.baseUrl + categoryApiUrl + config.api_key;
  		$.getJSON(url, (categoryData)=>{
  			this.setState({
  				moviePosters:categoryData.reults
  			})
  		});
  	}

	render(){
	var postersArray = [];
    this.state.moviePosters.map((poster, index)=>{
      postersArray.push(<Poster poster={poster} key={index} />)
    });
    var discoverButtons = [];
    Constants.discoverLinks.map((category, index)=>{
    	discoverButtons.push(
    		<DiscoverButton buttonLink={category.Link} buttonText={category.buttonText} functionFromParent={this.handleCategoryChange} key={index} />
    	)
    })
		return(
			<div>
				<h1>
				<div className="col-sm-12">
					{discoverButtons}
				</div>
				</h1>
				{postersArray}
			</div>
		)
	}
}

export default Home;
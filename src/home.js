import React, { Component } from 'react';
import './App.css';


class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			moviePosters: []
		}
		
	}
	render(){
		return(
			<h1>
			This is the home page
			</h1>
		)
	}
}

export default Home;
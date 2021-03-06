import React, { Component } from 'react';

class DiscoverButton extends Component{
	handleButtonClickChild(apiLink){
		this.props.functionFromParent(apiLink)
	}
	render(){
		var apiLink = this.props.ButtonLink;
		var buttonText = this.props.buttonText;
		return(
			<button className="btn btn-primary" onClick={()=> this.handleButtonClickChild(apiLink)}>
				{buttonText}
			</button>
		)
	}
}


export default DiscoverButton;
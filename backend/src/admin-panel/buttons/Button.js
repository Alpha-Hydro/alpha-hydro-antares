import React from "react";
import ReactDOM from "react-dom";

import Btn from "react-bootstrap/lib/Button";
import FaIcon from "./FaIcon";

export default class Button extends React.Component{

	test(e){
		this.props.eventClick();
		console.log(this.props.action);
	}

  render(){
    return (
			<Btn {...this.props} onClick={this.test.bind(this)}>
				<FaIcon icon={this.props.icon} />
			</Btn>
    )
  }
}

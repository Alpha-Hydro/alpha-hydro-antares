import React from "react";

import Btn from "react-bootstrap/lib/Button";
import FaIcon from "./FaIcon";

export default class Button extends React.Component{

	handleClick(e){
		this.props.eventClick(this.props.action, this.props.title);
	}

  render(){
    return (
				<Btn {...this.props} onClick={this.handleClick.bind(this)}>
					<FaIcon icon={this.props.icon} />
				</Btn>
    )
  }
}

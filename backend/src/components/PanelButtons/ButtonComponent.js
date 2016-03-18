import React from "react";
import Btn from "react-bootstrap/lib/Button";
import {Glyphicon} from "react-bootstrap/lib";

import FaIcon from "./../FaIconComponent";

export default class ButtonComponent extends React.Component{

	handlerClick(e){
		this.props.eventClick(this.props.action, this.props.title);
	}

  render(){
    return (
				<Btn {...this.props} onClick={this.handlerClick.bind(this)}>
					<Glyphicon glyph={this.props.icon} />
				</Btn>
    )
  }
}

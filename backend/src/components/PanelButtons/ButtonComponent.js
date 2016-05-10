import React from "react";
import {Button, Glyphicon} from "react-bootstrap";

export default class ButtonComponent extends React.Component{

	handlerClick(e){
		this.props.eventClick(this.props.action, this.props.title);
	}

  render(){
    return (
				<Button {...this.props} onClick={this.handlerClick.bind(this)}>
					<Glyphicon glyph={this.props.icon} />
				</Button>
    )
  }
}

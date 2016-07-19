import React from "react";
import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

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

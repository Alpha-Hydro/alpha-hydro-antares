import React from "react";

export default class Button extends React.Component{
	test(e){
		console.log(this.props.action);
	}

  render(){
		var icon = React.DOM.i({
			className: "text-muted fa fa-fw fa-2x fa-"+ (this.props.icon)
		});

    return (
      <li>
        <a href="#" onClick={this.test.bind(this)} title={this.props.title}>{icon}</a>
      </li>
    )
  }
}

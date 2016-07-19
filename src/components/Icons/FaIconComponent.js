import React from "react";

export default class FaIconComponent extends React.Component{
	render(){
		return (
			React.DOM.i({
				className: "fa fa-fw fa-2x fa-"+ (this.props.icon)
			})
		)
	}
}
import React from "react";

export default class Title extends React.Component {
	handleShow(){
		this.props.toggleShowEdit()
	}

	rowClass(){
		return !this.props.show ? "hidden" : "h1";
	}

	render(){
		return(
			<div class={this.rowClass()}>
				{this.props.title}
				<button type="button" class="btn btn-primary ml2" onClick={this.handleShow.bind(this)}>
					<span class="glyphicon glyphicon-pencil" aria-hidden="true" />
				</button>
			</div>
		)
	}
}
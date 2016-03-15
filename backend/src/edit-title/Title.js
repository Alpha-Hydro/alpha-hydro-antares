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
			<div className={this.rowClass()}>
				{this.props.title}
				<button type="button" className="btn btn-primary btn-sm ml2" onClick={this.handleShow.bind(this)}>
					<span className="glyphicon glyphicon-pencil" aria-hidden="true" />
				</button>
			</div>
		)
	}
}
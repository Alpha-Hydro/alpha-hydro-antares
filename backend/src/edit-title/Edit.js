import React from "react";

export default class Edit extends React.Component {
	handleShow(){
		this.props.toggleShowTitle()
	}

	handleChange(e){
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	rowClass(){
		return !this.props.show ? "hidden" : "row";
	}

	render(){
		return(
			<div class={this.rowClass()}>
				<div class="col-md-7">
					<input type="text" class="form-control" onChange={this.handleChange.bind(this)} value={this.props.title}/>
				</div>
				<div class="col-md-1">
					<button type="button" class="btn btn-success" onClick={this.handleShow.bind(this)}>
						<span class="glyphicon glyphicon-save" aria-hidden="true"/>
					</button>
				</div>
			</div>
		)
	}
}
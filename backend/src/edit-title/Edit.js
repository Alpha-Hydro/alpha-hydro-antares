import React from "react";

export default class Edit extends React.Component {
    constructor(){
        super();
        this.state = {
            btnClass: "btn btn-success disabled"
        }
    }

	handleShow(){
		this.props.toggleShowTitle()
	}

	handleChange(e){
		const title = e.target.value;
		this.props.changeTitle(title);
		if(title.length !== 0){
				this.setState({btnClass: "btn btn-success"});
		}
		else{
				this.setState({btnClass: "btn btn-success disabled"});
		}
	}

	rowClass(){
		return !this.props.show ? "hidden" : "row edit-row";
	}

	render(){
		return(
			<div class={this.rowClass()}>
				<div class="col-md-7">
					<input type="text" class="form-control" onChange={this.handleChange.bind(this)} value={this.props.title}/>
				</div>
				<div class="col-md-1">
					<button type="button" class={this.state.btnClass} onClick={this.handleShow.bind(this)}>
						<span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"/>
					</button>
				</div>
			</div>
		)
	}
}